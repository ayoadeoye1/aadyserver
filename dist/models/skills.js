"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const skillsSchema = new mongoose.Schema({
    category: {
        type: String,
        require,
    },
    skill: {
        type: String,
        require
    },
    rank: {
        type: Number,
        require
    },
    datePosted: {
        type: Date,
        default: new Date(),
    },
});
exports.default = mongoose.model('Skills', skillsSchema);
//# sourceMappingURL=skills.js.map