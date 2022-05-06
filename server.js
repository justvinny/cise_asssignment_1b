require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

// Routes
app.get("/", (request, response) => {
    response.send("<h1>Hello world!</h1>");
});

// Start Server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
