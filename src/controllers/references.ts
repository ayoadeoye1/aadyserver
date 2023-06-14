import References from '../models/references';
import { Request, Response } from 'express';

export const Refget = async(req: Request, res: Response) =>{
  try {
    const references = await References.find();

    res.status(200).json(references);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

export const Refjpost = async(req: Request, res: Response) =>{
  const { name, occupation, mail, social } = req.body;

  if(!name || !occupation ){
    res.status(400).json('inputs are required!');
  }

  try {
    const references = new References({
      name,
      occupation,
      mail,
      social
    });

    await references.save();

    res.status(200).json('reference added!');
  } catch (error) {
    res.status(500).json(error.message);
  }
}


export const Refdelete = async(req: Request, res: Response) =>{
  const { id } = req.params
  try {
    await References.deleteOne({_id: id});

    res.status(200).json('reference deleted');
  } catch (error) {
    res.status(500).json(error.message);
  }
}
