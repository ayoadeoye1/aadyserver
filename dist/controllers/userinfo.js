"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Userdataget = exports.Usersdata = void 0;
const ipdata_1 = require("../models/ipdata");
const ipdata_2 = require("../utils/ipdata");
const Usersdata = async (req, res) => {
    const { userIp } = req.body;
    try {
        const data = await ipdata_2.default.getUserData(userIp);
        // console.log(data)
        //  const ipdat = new Ipdata({
        //     ip: data.ip,
        //     city: data.city,
        //     region: data.region,
        //     // languages: ,
        //     country_name: data.country_name,
        //     emoji_flag: data.emoji_flag,
        //     currency: data.currency.name,
        //     time_zone: data.time_zone.abbr+' || '+data.time_zone.current_time,
        //     threat: data.threat.is_threat
        //   }); 
        // await ipdat.save();
        // res.status(200).json('data scrappped!');
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
};
exports.Usersdata = Usersdata;
const Userdataget = async (req, res) => {
    try {
        const ipdata = await ipdata_1.default.find().sort({ datePosted: -1 }).exec();
        res.status(200).json(ipdata);
    }
    catch (error) {
        res.status(500).json(error.message);
    }
};
exports.Userdataget = Userdataget;
//# sourceMappingURL=userinfo.js.map