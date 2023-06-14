import Message from '../models/message';
import { Request, Response } from 'express';

export const Mesjget = async(req: Request, res: Response) =>{
  try {
    const message = await Message.find().sort({datePosted: -1}).exec();

    res.status(200).json(message);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

export const Mesjpost = async(req: Request, res: Response) =>{
  const { name, email, message } = req.body;

  if(!name || !email || !message){
    res.status(400).json('inputs are required!');
  }

  try {
    const msg = new Message({
      name,
      email,
      message
    });

    await msg.save();

    res.status(200).json('message added!');
  } catch (error) {
    res.status(500).json(error.message);
  }
}


export const Mesjdelete = async(req: Request, res: Response) =>{
  const { id } = req.params
  try {
    await Message.deleteOne({_id: id});

    res.status(200).json('message deleted');
  } catch (error) {
    res.status(500).json(error.message);
  }
}
