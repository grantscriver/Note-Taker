const fs = require("fs");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    noteData = JSON.parse(fs.readFileSync("./db/db.json"));
    res.json(noteData);
  });
  app.post("/api/notes", function (req, res) {
    noteData.push(req.body);
    req.body.id = Math.random();
    fs.writeFileSync("./db/db.json", JSON.stringify(noteData));
    res.json(noteData);
  });
  app.delete("/api/notes/:id", function (req, res) {
    const thisId = req.params.id;
    noteData = JSON.parse(fs.readFileSync("./db/db.json"));
    noteData = noteData.filter((tempElement) => tempElement.id != thisId);
  });
};
