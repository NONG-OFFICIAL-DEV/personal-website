const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 9090;

app.use(cors());
app.use(bodyParser.json());

const CONTENT_PATH = path.join(__dirname, "data/content.json");

// ✅ Load once at startup
let cachedContent = null;

function loadContentFromDisk() {
  try {
    const raw = fs.readFileSync(CONTENT_PATH, "utf8");
    cachedContent = JSON.parse(raw);
    console.log("✅ Content loaded into memory");
  } catch (err) {
    console.error("❌ Failed to load content:", err);
    cachedContent = {};
  }
}

loadContentFromDisk();

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Load content (FAST)
app.get("/api/load-content", (req, res) => {
  res.setHeader("Cache-Control", "public, max-age=300"); // 5 minutes
  res.json(cachedContent);
});

// Save content + update cache
app.post("/api/save-content", (req, res) => {
  cachedContent = req.body;

  fs.writeFile(
    CONTENT_PATH,
    JSON.stringify(cachedContent, null, 2),
    (err) => {
      if (err) {
        console.error("Error writing file", err);
        return res.status(500).json({ message: "Failed to save JSON" });
      }
      res.json({ message: "Content saved successfully" });
    }
  );
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
