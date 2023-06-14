import { Request, Response } from 'express';
import About from '../models/about';



export const Aboutmeget = async(req: Request, res: Response) =>{
  const { id } = req.params;

  try {
    const about = await About.findById({_id: id});
    res.status(201).json(about)
  } catch (error) {
    // throw new error(error.message)
    res.status(500).json(error.message);
  }
}

export const Aboutmepatch = async(req: Request, res: Response) =>{
  const { abouttext, vid } = req.body;
  const { id } = req.params;
  
  try {
    const prevData = await About.findOne({_id: id});

    prevData.about = abouttext;
    prevData.vidUrl = vid;

    await prevData.save();
    res.status(201).json('about me updated!')
  } catch (error) {
    // throw new error(error.message)
    res.status(500).json(error.message);
  }
}
