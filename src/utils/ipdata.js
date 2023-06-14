import IPData from 'ipdata';

const IPD_APIKEY = process.env.IPD_APIKEY;

const ipdata = new IPData(IPD_APIKEY);

export default class ipData{

  static async getUserData(ip){
    const data = await ipdata.lookup(ip);
    return data;
  }

}