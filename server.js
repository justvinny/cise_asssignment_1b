// Library imports
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const app = express();

// User made file imports
const { DB_MODE_MOCK } = require("./constants");

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

// Connect to MongoDB
const dbMode = process.argv.slice(2)[0];
if (dbMode && dbMode === DB_MODE_MOCK) {
    const { connectMockDb, populateMockData } = require("./database/mockDb");
    connectMockDb();
    populateMockData();
} else {
    const { connectDb } = require("./database/db");
    connectDb();
}

// Routes
app.get("/api", (req, res) => {
    res.send("<h1>Hello world!</h1>");
});

const articles = require("./routes/articles");
const pratices = require("./routes/practices");
app.use("/api/articles", articles);
app.use("/api/practices", pratices);

// Serve React Build
app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start Server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
