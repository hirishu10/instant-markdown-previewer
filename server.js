const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

// for POST if we have body it will help to display | removing body-parser express have default now
app.use(express.json());

app.get("/data", (req, res) => {
  res.json({
    message: "working",
  });
});

// Static Page for the Website
if (process.env.NODE_ENV === "production") {
  //
  app.use(express.static("client/build"));
  //
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// --------------------

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
