"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const projectsSchema = new mongoose.Schema({
    url: {
        type: String,
    },
    repo: {
        type: String,
        require
    },
    stack: {
        type: String,
        require
    },
    comment: {
        type: String,
        require
    },
    datePosted: {
        type: Date,
        default: new Date(),
    },
});
exports.default = mongoose.model('Projects', projectsSchema);
//# sourceMappingURL=projects.js.map