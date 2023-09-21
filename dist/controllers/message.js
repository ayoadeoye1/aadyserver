"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mesjdelete = exports.Mesjpost = exports.Mesjget = void 0;
const message_1 = require("../models/message");
const Mesjget = async (req, res) => {
    try {
        const message = await message_1.default.find().sort({ datePosted: -1 }).exec();
        res.status(200).json(message);
    }
    catch (error) {
        res.status(500).json(error.message);
    }
};
exports.Mesjget = Mesjget;
const Mesjpost = async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        res.status(400).json('inputs are required!');
    }
    try {
        const msg = new message_1.default({
            name,
            email,
            message
        });
        await msg.save();
        res.status(200).json('message added!');
    }
    catch (error) {
        res.status(500).json(error.message);
    }
};
exports.Mesjpost = Mesjpost;
const Mesjdelete = async (req, res) => {
    const { id } = req.params;
    try {
        await message_1.default.deleteOne({ _id: id });
        res.status(200).json('message deleted');
    }
    catch (error) {
        res.status(500).json(error.message);
    }
};
exports.Mesjdelete = Mesjdelete;
//# sourceMappingURL=message.js.map