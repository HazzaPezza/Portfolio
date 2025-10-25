// server.js -

// TUTORIALS FOR EXPRESS SUCK ASS WHY AM I STRUGGLING SO MUCH WITH BASIC SHIT.
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Recreate __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


app.listen(3000, () => console.log("Server running on port 3000"));
