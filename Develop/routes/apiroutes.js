// Include dependencies
const fs = require("fs");

// Route the back-end
module.exports = function (app) {
  // Read and display data from the notes database
  app.get("/api/notes", function (req, res) {
    noteData = JSON.parse(fs.readFileSync("./db/db.json"));
    res.json(noteData);
  });
  // Allows user to save a new notes
  app.post("/api/notes", function (req, res) {
    // Adding new note to the object
    noteData.push(req.body);
    // Create a unique id using Math.random function
    req.body.id = Math.random();
    // Writing new object to database in order to reflect the new note
    fs.writeFileSync("./db/db.json", JSON.stringify(noteData));
    res.json(noteData);
  });
  // Allows user to delete a notes
  app.delete("/api/notes/:id", function (req, res) {
    // Get unique id of the item that the user selected to delete
    const thisId = req.params.id;
    // Read current database file into an object
    noteData = JSON.parse(fs.readFileSync("./db/db.json"));
    // Filter out the note that the user selected to delete
    noteData = noteData.filter((tempElement) => tempElement.id != thisId);
    // Writing new object to database in order to reflect the deleted note
    fs.writeFileSync("./db/db.json", JSON.stringify(noteData));
    res.json(noteData);
  });
};
