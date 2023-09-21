"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const ipSchema = new mongoose.Schema({
    ip: {
        type: String,
        require
    },
    city: {
        type: String,
        require
    },
    region: {
        type: String,
        require
    },
    country_name: {
        type: String,
        require
    },
    languages: {
        type: String,
    },
    emoji_flag: {
        type: String,
        require
    },
    currency: {
        type: String,
        require
    },
    time_zone: {
        type: String,
        require
    },
    threat: {
        type: String,
        require
    },
    datePosted: {
        type: Date,
        default: new Date(),
    },
});
exports.default = mongoose.model('Ipdata', ipSchema);
//# sourceMappingURL=ipdata.js.map