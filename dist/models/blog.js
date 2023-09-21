"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        require
    },
    imageUrl: {
        type: String,
    },
    blogArticle: {
        type: String,
        require
    },
    clap: {
        type: Number,
        default: 0
    },
    datePosted: {
        type: Date,
        default: new Date(),
    },
});
exports.default = mongoose.model('Blog', blogSchema);
//# sourceMappingURL=blog.js.map