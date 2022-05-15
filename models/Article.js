const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    title: String,
    authors: String,
    source: String,
    pubyear: Number,
    doi: String,
    claim: String,
    evidence: String,
    sepractice: String
});

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;