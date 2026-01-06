const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

// Enable CORS for your Vue frontend
app.use(cors());
app.use(bodyParser.json());

// Endpoint to save content
app.post("/api/save-content", (req, res) => {
  const content = req.body;

  fs.writeFile(
    path.join(__dirname, "data/content.json"),
    JSON.stringify(content, null, 2),
    (err) => {
      if (err) {
        console.error("Error writing file", err);
        return res.status(500).json({ message: "Failed to save JSON" });
      }
      res.json({ message: "Content saved successfully" });
    }
  );
});

// Endpoint to load content
app.get("/api/load-content", (req, res) => {
  fs.readFile(path.join(__dirname, "data/content.json"), "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file", err);
      return res.status(500).json({ message: "Failed to load JSON" });
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
