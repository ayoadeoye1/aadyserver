"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT = void 0;
const jwt = require("jsonwebtoken");
class JWT {
    static async generateToken(id) {
        const token = jwt.sign({ _id: id }, this.JWTSECRET, { expiresIn: '2h' });
        return token;
    }
    static async validateToken(token) {
        const data = jwt.verify(token, this.JWTSECRET);
        return data;
    }
}
exports.JWT = JWT;
JWT.JWTSECRET = process.env.JWTSECRET;
//# sourceMappingURL=jwt.js.map