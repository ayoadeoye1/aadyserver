"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Edudelete = exports.Edupost = exports.Eduget = void 0;
const education_1 = require("../models/education");
const Eduget = async (req, res) => {
    try {
        const education = await education_1.default.find();
        res.status(200).json(education);
    }
    catch (error) {
        res.status(500).json(error.message);
    }
};
exports.Eduget = Eduget;
const Edupost = async (req, res) => {
    const { institution, course, duration, } = req.body.body;
    if (!institution || !course || !duration) {
        res.status(400).json('inputs are required!');
    }
    try {
        const education = new education_1.default({
            institution,
            course,
            duration
        });
        await education.save();
        res.status(200).json('education added!');
    }
    catch (error) {
        res.status(500).json(error.message);
    }
};
exports.Edupost = Edupost;
const Edudelete = async (req, res) => {
    const { id } = req.params;
    try {
        await education_1.default.deleteOne({ _id: id });
        res.status(200).json('project deleted');
    }
    catch (error) {
        res.status(500).json(error.message);
    }
};
exports.Edudelete = Edudelete;
//# sourceMappingURL=education.js.map