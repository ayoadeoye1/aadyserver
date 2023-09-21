"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aboutmepatch = exports.Aboutmeget = void 0;
const about_1 = require("../models/about");
const Aboutmeget = async (req, res) => {
    const { id } = req.params;
    try {
        const about = await about_1.default.findById({ _id: id });
        res.status(201).json(about);
    }
    catch (error) {
        // throw new error(error.message)
        res.status(500).json(error.message);
    }
};
exports.Aboutmeget = Aboutmeget;
const Aboutmepatch = async (req, res) => {
    const { abouttext, vid } = req.body;
    const { id } = req.params;
    try {
        const prevData = await about_1.default.findOne({ _id: id });
        prevData.about = abouttext;
        prevData.vidUrl = vid;
        await prevData.save();
        res.status(201).json('about me updated!');
    }
    catch (error) {
        // throw new error(error.message)
        res.status(500).json(error.message);
    }
};
exports.Aboutmepatch = Aboutmepatch;
//# sourceMappingURL=about.js.map