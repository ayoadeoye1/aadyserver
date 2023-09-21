"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const aboutSchema = new mongoose.Schema({
    about: {
        type: String,
    },
    vidUrl: {
        type: String,
    },
    datePosted: {
        type: Date,
        default: new Date(),
    },
});
exports.default = mongoose.model('About', aboutSchema);
//# sourceMappingURL=about.js.map