import AdminUser from '../models/adminuser'
import { Request, Response } from 'express'
import { Bcrypt } from '../security/bcrypt';
import { JWT } from '../security/jwt';


export const AdminLogin = async(req: Request, res: Response) =>{
  const { username, password } = req.body;
  
  if(!username || !password){
    return res.status(400).json('all inputs are required');
  }
  
  try {
    const dbUser = await AdminUser.findOne({username: username})

    if(!dbUser){
      return res.status(400).json('user does not exist');
    }

    const validatePassword = await Bcrypt.validatePsw(password, dbUser.password);

    if(!validatePassword){
      return res.status(400).json('incorrect password');
    }else{
      const token = await JWT.generateToken(dbUser.id);
      
      res.status(201).json({token: token});
    }
  } catch (error) {
    res.status(500).json(error.message);
    console.log(error.message)
  }
}

export const AdminReg = async(req: Request, res: Response) =>{
  const { username, email, password, cpassword} = req.body;

  if(!username || !email || !password || !cpassword){
    return res.status(400).json('all input fields are required');
  }

  try {
    if(cpassword !== password){
      return res.status(400).json('password does not match');
    }

    const hpassword = await Bcrypt.encryptPsw(password);

    const user = new AdminUser({
      username: username,
      email: email,
      password: hpassword,
    })

    await user.save();
    res.status(200).json('user created successfully')
  } catch (error) {
    res.status(500).json(error.message);
  }
}
