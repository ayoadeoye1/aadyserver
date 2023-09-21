"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projdelete = exports.Projpost = exports.Projget = void 0;
const projects_1 = require("../models/projects");
const Projget = async (req, res) => {
    try {
        const projects = await projects_1.default.find();
        res.status(200).json(projects);
    }
    catch (error) {
        res.status(500).json(error.message);
    }
};
exports.Projget = Projget;
const Projpost = async (req, res) => {
    const { url, repo, stack, comment } = req.body;
    if (!repo || !stack || !comment) {
        res.status(400).json('inputs are required!');
    }
    try {
        const projects = new projects_1.default({
            url,
            repo,
            stack,
            comment
        });
        await projects.save();
        res.status(200).json('project added!');
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json(error.message);
    }
};
exports.Projpost = Projpost;
const Projdelete = async (req, res) => {
    const { id } = req.params;
    try {
        await projects_1.default.deleteOne({ _id: id });
        res.status(200).json('project deleted');
    }
    catch (error) {
        res.status(500).json(error.message);
    }
};
exports.Projdelete = Projdelete;
//# sourceMappingURL=projects.js.map