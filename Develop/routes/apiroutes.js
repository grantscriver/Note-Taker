var noteData = require("../db/db");

module.exports = function (app) {
  app.get("/api/notes", function (req, yes) {
    res.json(noteData);
  });
};
