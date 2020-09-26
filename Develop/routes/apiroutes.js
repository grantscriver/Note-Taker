/*
const fs = require("fs");
*/
const noteData = require("../db/db");

module.exports = function (app) {
  console.log("in module exports");
  app.get("/api/notes", function (req, res) {
    console.log("in API routes get function");
    res.json(true);
  });
  app.post("/api/notes", function (req, res) {
    console.log("in API routes post function");
    noteData.push(req.body);
    res.json(true);
  });
};
