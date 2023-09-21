"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bcrypt = void 0;
const bcrypt = require("bcryptjs");
class Bcrypt {
    static async encryptPsw(password) {
        return await bcrypt.hash(password, 20);
    }
    static async validatePsw(password, hpassword) {
        return await bcrypt.compare(password, hpassword);
    }
}
exports.Bcrypt = Bcrypt;
//# sourceMappingURL=bcrypt.js.map