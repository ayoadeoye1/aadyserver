import * as jwt from 'jsonwebtoken';
import { ObjectId } from 'mongoose';


export class JWT{

  private static JWTSECRET = process.env.JWTSECRET

  public static async generateToken(id: ObjectId) {
    const token = jwt.sign({_id: id}, this.JWTSECRET, { expiresIn: '2h'})
    return token
  }

  public static async validateToken(token: string) {
    const data = jwt.verify(token, this.JWTSECRET)
    return data;
  }

}