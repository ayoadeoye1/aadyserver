"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ipdata_1 = require("ipdata");
const IPD_APIKEY = process.env.IPD_APIKEY;
const ipdata = new ipdata_1.default(IPD_APIKEY);
class ipData {
    static async getUserData(ip) {
        const data = await ipdata.lookup(ip);
        return data;
    }
}
exports.default = ipData;
//# sourceMappingURL=ipdata.js.map