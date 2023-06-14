import Ipdata from '../models/ipdata';
import { Request, Response } from 'express';
import ipData from '../utils/ipdata';


export const Usersdata = async(req: Request, res: Response) =>{
  const { userIp } = req.body;

  try {

    const data = await ipData.getUserData(userIp);
    const ipdat = new Ipdata({
      ip: data.ip,
      city: data.city,
      region: data.region,
      // languages: ,
      country_name: data.country_name,
      emoji_flag: data.emoji_flag,
      currency: data.currency.name,
      time_zone: data.time_zone.abbr+' || '+data.time_zone.current_time,
      threat: data.threat.is_threat
    });
    
    await ipdat.save();
    res.status(200).json('data scrappped!');
  } catch (error) {
    console.log(error)
    res.status(500).json(error.message);
  }
}

export const Userdataget = async(req: Request, res: Response) =>{
  try {
    const ipdata = await Ipdata.find().sort({datePosted: -1}).exec();

    res.status(200).json(ipdata);
  } catch (error) {
    res.status(500).json(error.message);
  }
}
