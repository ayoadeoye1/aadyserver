import Projects from '../models/projects';
import { Request, Response } from 'express';

export const Projget = async(req: Request, res: Response) =>{
  try {
    const projects = await Projects.find();

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

export const Projpost = async(req: Request, res: Response) =>{
  const { url, repo, stack, comment } = req.body;

  if(!repo || !stack || !comment){
    res.status(400).json('inputs are required!');
  }
  

  try {
    const projects = new Projects({
      url,
      repo,
      stack,
      comment
    });

    await projects.save();
    
    res.status(200).json('project added!');
  } catch (error) {
    console.log(error.message)
    res.status(500).json(error.message);
  }
}


export const Projdelete = async(req: Request, res: Response) =>{
  const { id } = req.params
  try {
    await Projects.deleteOne({_id: id});

    res.status(200).json('project deleted');
  } catch (error) {
    res.status(500).json(error.message);
  }
}
