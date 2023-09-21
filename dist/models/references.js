"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const referenceSchema = new mongoose.Schema({
    name: {
        type: String,
        require
    },
    occupation: {
        type: String,
        require
    },
    address: String,
    mail: String,
    social: String,
    datePosted: {
        type: Date,
        default: new Date(),
    },
});
exports.default = mongoose.model('Reference', referenceSchema);
//# sourceMappingURL=references.js.map