const mongoose = require("mongoose");

const practiceSchema = new mongoose.Schema({
    practice: String
});

const Practice = mongoose.model("Practice", practiceSchema);
module.exports = Practice;