import Skills from '../models/skills';
import { Request, Response } from 'express';

export const Skillsget = async(req: Request, res: Response) =>{
  try {
    const skills = await Skills.find();

    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json(error.message);
  }
}


export const Skillspost = async(req: Request, res: Response) =>{
  const { category, skill,  rank} = req.body;

  try {
    const skills = new Skills({
      category,
      skill,
      rank
    })

    await skills.save();
    res.status(200).json('new skill added');
  } catch (error) {
    res.status(500).json(error.message);
  }
}

export const Skillsdelete = async(req: Request, res: Response) =>{
  const { id } = req.params
  try {
    await Skills.deleteOne({_id: id});

    res.status(200).json('deleted!');
  } catch (error) {
    res.status(500).json(error.message);
  }
}
