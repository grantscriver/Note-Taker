// Dependencies
// =============================================================
const express = require("express");
const fs = require("fs");

// check if this is needed at the end
const util = require("util");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3000 || process.env.PORT;

// Sets up the Express app to handle data parsing
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/htmlroutes")(app);
require("./routes/apiroutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
