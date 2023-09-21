"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Refdelete = exports.Refjpost = exports.Refget = void 0;
const references_1 = require("../models/references");
const Refget = async (req, res) => {
    try {
        const references = await references_1.default.find();
        res.status(200).json(references);
    }
    catch (error) {
        res.status(500).json(error.message);
    }
};
exports.Refget = Refget;
const Refjpost = async (req, res) => {
    const { name, occupation, mail, social } = req.body;
    if (!name || !occupation) {
        res.status(400).json('inputs are required!');
    }
    try {
        const references = new references_1.default({
            name,
            occupation,
            mail,
            social
        });
        await references.save();
        res.status(200).json('reference added!');
    }
    catch (error) {
        res.status(500).json(error.message);
    }
};
exports.Refjpost = Refjpost;
const Refdelete = async (req, res) => {
    const { id } = req.params;
    try {
        await references_1.default.deleteOne({ _id: id });
        res.status(200).json('reference deleted');
    }
    catch (error) {
        res.status(500).json(error.message);
    }
};
exports.Refdelete = Refdelete;
//# sourceMappingURL=references.js.map