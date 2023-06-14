import Education from '../models/education';
import { Request, Response } from 'express';

export const Eduget = async(req: Request, res: Response) =>{
  try {
    const education = await Education.find();

    res.status(200).json(education);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

export const Edupost = async(req: Request, res: Response) =>{
  const { institution, course, duration, } = req.body.body;
  
  if(!institution || !course || !duration){
    res.status(400).json('inputs are required!');
  }
  console.log(course)
  try {
    const education = new Education({
      institution,
      course,
      duration
    });

    await education.save();

    res.status(200).json('education added!');
  } catch (error) {
    res.status(500).json(error.message);
  }
}


export const Edudelete = async(req: Request, res: Response) =>{
  const { id } = req.params
  try {
    await Education.deleteOne({_id: id});

    res.status(200).json('project deleted');
  } catch (error) {
    res.status(500).json(error.message);
  }
}
