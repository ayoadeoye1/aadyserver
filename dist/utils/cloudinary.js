"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
const dotenv = require("dotenv");
dotenv.config();
cloudinary_1.v2.config({
    cloud_name: process.env.C_NAME,
    api_key: process.env.C_APIKEY,
    api_secret: process.env.C_APISECRET
});
exports.default = cloudinary_1.v2;
//# sourceMappingURL=cloudinary.js.map