"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminReg = exports.AdminLogin = void 0;
const adminuser_1 = require("../models/adminuser");
const bcrypt_1 = require("../security/bcrypt");
const jwt_1 = require("../security/jwt");
const AdminLogin = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json('all inputs are required');
    }
    try {
        const dbUser = await adminuser_1.default.findOne({ username: username });
        if (!dbUser) {
            return res.status(400).json('user does not exist');
        }
        const validatePassword = await bcrypt_1.Bcrypt.validatePsw(password, dbUser.password);
        if (!validatePassword) {
            return res.status(400).json('incorrect password');
        }
        else {
            const token = await jwt_1.JWT.generateToken(dbUser.id);
            res.status(201).json({ token: token });
        }
    }
    catch (error) {
        res.status(500).json(error.message);
        console.log(error.message);
    }
};
exports.AdminLogin = AdminLogin;
const AdminReg = async (req, res) => {
    const { username, email, password, cpassword } = req.body;
    if (!username || !email || !password || !cpassword) {
        return res.status(400).json('all input fields are required');
    }
    try {
        if (cpassword !== password) {
            return res.status(400).json('password does not match');
        }
        const hpassword = await bcrypt_1.Bcrypt.encryptPsw(password);
        const user = new adminuser_1.default({
            username: username,
            email: email,
            password: hpassword,
        });
        await user.save();
        res.status(200).json('user created successfully');
    }
    catch (error) {
        res.status(500).json(error.message);
    }
};
exports.AdminReg = AdminReg;
//# sourceMappingURL=auth.admin.js.map