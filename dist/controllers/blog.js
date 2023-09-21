"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blogclap = exports.Blogdelete = exports.Blogpost = exports.Bloggetone = exports.Blogget = void 0;
const blog_1 = require("../models/blog");
const cloudinary_1 = require("../utils/cloudinary");
const Blogget = async (req, res) => {
    try {
        const blogs = await blog_1.default.find();
        res.status(200).json(blogs);
    }
    catch (error) {
        res.status(500).json(error.message);
    }
};
exports.Blogget = Blogget;
const Bloggetone = async (req, res) => {
    const { id } = req.params;
    try {
        const blogs = await blog_1.default.findById({ _id: id });
        res.status(200).json(blogs);
    }
    catch (error) {
        res.status(500).json(error.message);
    }
};
exports.Bloggetone = Bloggetone;
const Blogpost = async (req, res) => {
    const { title, article, clap } = req.body;
    const image = req.file;
    if (!title || !article) {
        return res.status(400).json('inputs are required!');
    }
    try {
        const result = await cloudinary_1.default.uploader.upload(image.path);
        const blog = new blog_1.default({
            title,
            imageUrl: result.secure_url,
            blogArticle: article,
            clap
        });
        await blog.save();
        res.status(200).json('blog created!');
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
};
exports.Blogpost = Blogpost;
const Blogdelete = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const blog = await blog_1.default.findOne({ _id: id });
        await cloudinary_1.default.uploader.destroy(blog.imageUrl);
        await blog_1.default.deleteOne({ _id: blog.id });
        res.status(200).json('blog deleted');
    }
    catch (error) {
        res.status(500).json(error.message);
    }
};
exports.Blogdelete = Blogdelete;
const Blogclap = async (req, res) => {
    const { id } = req.params;
    try {
        await blog_1.default.findOneAndUpdate({ _id: id }, { $inc: { 'clap': 1 } }, { new: true });
        res.status(200).json('you clapped');
    }
    catch (error) {
        res.status(500).json(error.message);
    }
};
exports.Blogclap = Blogclap;
//# sourceMappingURL=blog.js.map