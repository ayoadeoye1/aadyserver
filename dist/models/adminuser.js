"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        require
    },
    email: {
        type: String,
        require
    },
    password: {
        type: String,
        require
    },
});
exports.default = mongoose.model('AdminUser', adminSchema);
//# sourceMappingURL=adminuser.js.map