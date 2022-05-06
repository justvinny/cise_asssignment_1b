require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const connectDb = require("./database/db");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

// Connect DB
connectDb();

// Routes
app.get("/api", (request, response) => {
    response.send("<h1>Hello world!</h1>");
});

// Serve React Build
app.use(express.static(path.join(__dirname, 'build')));
app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "build", "index.html"));
})

// Start Server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});