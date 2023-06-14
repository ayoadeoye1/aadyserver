import { v2 as cloudinary } from 'cloudinary';
import * as dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
    cloud_name: process.env.C_NAME,
    api_key: process.env.C_APIKEY,
    api_secret: process.env.C_APISECRET
})

export default cloudinary;