"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skillsdelete = exports.Skillspost = exports.Skillsget = void 0;
const skills_1 = require("../models/skills");
const Skillsget = async (req, res) => {
    try {
        const skills = await skills_1.default.find();
        res.status(200).json(skills);
    }
    catch (error) {
        res.status(500).json(error.message);
    }
};
exports.Skillsget = Skillsget;
const Skillspost = async (req, res) => {
    const { category, skill, rank } = req.body;
    try {
        const skills = new skills_1.default({
            category,
            skill,
            rank
        });
        await skills.save();
        res.status(200).json('new skill added');
    }
    catch (error) {
        res.status(500).json(error.message);
    }
};
exports.Skillspost = Skillspost;
const Skillsdelete = async (req, res) => {
    const { id } = req.params;
    try {
        await skills_1.default.deleteOne({ _id: id });
        res.status(200).json('deleted!');
    }
    catch (error) {
        res.status(500).json(error.message);
    }
};
exports.Skillsdelete = Skillsdelete;
//# sourceMappingURL=skills.js.map