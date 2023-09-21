"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const educationSchema = new mongoose.Schema({
    institution: {
        type: String,
        require
    },
    course: {
        type: String,
        require
    },
    duration: {
        type: String,
        require
    },
    datePosted: {
        type: Date,
        default: new Date(),
    },
});
exports.default = mongoose.model('Education', educationSchema);
//# sourceMappingURL=education.js.map