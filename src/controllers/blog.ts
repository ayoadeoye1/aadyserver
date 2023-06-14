import Blog from '../models/blog';
import { Request, Response } from 'express';

import cloudinary from '../utils/cloudinary';

export const Blogget = async(req: Request, res: Response) =>{
  try {
    const blogs = await Blog.find();

    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

export const Bloggetone = async(req: Request, res: Response) =>{
  const { id } = req.params;
  try {
    const blogs = await Blog.findById({_id: id});

    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

export const Blogpost = async(req: Request, res: Response) =>{
  const { title, blogArticle, clap } = req.body;
  const image = req.file;
  
  if(!title || !blogArticle || !image){
    res.status(400).json('inputs are required!');
  }
  
  try {
    const result = await cloudinary.uploader.upload(image.path);

    const blog = new Blog({
      title,
      imageUrl: result.secure_url,
      blogArticle,
      clap
    });

    await blog.save();

    res.status(200).json('project added!');
  } catch (error) {
    res.status(500).json(error.message);
  }
}


export const Blogdelete = async(req: Request, res: Response) =>{
  const { id } = req.params
  console.log(id)
  try {
    const blog = await Blog.findOne({_id: id});

    await cloudinary.uploader.destroy(blog.imageUrl)
    await Blog.deleteOne({_id: blog.id})

    res.status(200).json('blog deleted');
  } catch (error) {
    res.status(500).json(error.message);
  }
}


export const Blogclap = async(req: Request, res: Response) =>{
  const { id } = req.params
  
  try {
    await Blog.findOneAndUpdate({_id: id}, {$inc: {'clap': 1}}, {new: true});

    res.status(200).json('you clapped');
  } catch (error) {
    res.status(500).json(error.message);
  }
}
