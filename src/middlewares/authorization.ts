import { NextFunction } from 'connect';
import { Request, Response } from 'express';
import AdminUser from '../models/adminuser';
import { JWT } from '../security/jwt';

export const Authorize = async(req: Request, res: Response, next: NextFunction) =>{
  const { authorization } = req.headers;

  const auth = authorization.split(' ')[1];
  
  if(!auth){
    return res.status(400).json('user not logged-in');
  }

  try {
    const token = auth;

    let authUser = await JWT.validateToken(token);

    if(!authUser){
      return res.status(400).json('invalid user');
    }

    const id = Object.values(authUser)[0];
    const user = await AdminUser.findById({_id: id});
    next();

  } catch (error) {
    res.status(500).json(error.message);
  }

}