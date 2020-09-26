// Included dependencies
const path = require("path");

// Routed the front-end
module.exports = function (app) {
  // Intro page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  // Notes page
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
};
