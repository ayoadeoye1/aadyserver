"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorize = void 0;
const adminuser_1 = require("../models/adminuser");
const jwt_1 = require("../security/jwt");
const Authorize = async (req, res, next) => {
    const { authorization } = req.headers;
    const auth = authorization.split(' ')[1];
    if (!auth) {
        return res.status(400).json('user not logged-in');
    }
    try {
        const token = auth;
        let authUser = await jwt_1.JWT.validateToken(token);
        if (!authUser) {
            return res.status(400).json('invalid user');
        }
        const id = Object.values(authUser)[0];
        const user = await adminuser_1.default.findById({ _id: id });
        await user &&
            next();
    }
    catch (error) {
        res.status(500).json(error.message);
    }
};
exports.Authorize = Authorize;
//# sourceMappingURL=authorization.js.map