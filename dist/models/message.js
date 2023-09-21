"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        require
    },
    email: {
        type: String,
        require
    },
    message: {
        type: String,
        require
    },
    datePosted: {
        type: Date,
        default: new Date(),
    },
});
exports.default = mongoose.model('Message', messageSchema);
//# sourceMappingURL=message.js.map