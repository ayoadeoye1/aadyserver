"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const multer_1 = require("./utils/multer");
const about_1 = require("./controllers/about");
const skills_1 = require("./controllers/skills");
const projects_1 = require("./controllers/projects");
const blog_1 = require("./controllers/blog");
const education_1 = require("./controllers/education");
const references_1 = require("./controllers/references");
const message_1 = require("./controllers/message");
const auth_admin_1 = require("./auth/auth.admin");
const userinfo_1 = require("./controllers/userinfo");
const authorization_1 = require("./middlewares/authorization");
const cors = require("cors");
const router = express.Router();
//-----auth routes------
router.post('/sign-in', cors(), auth_admin_1.AdminLogin);
router.post('/sign-up', authorization_1.Authorize, auth_admin_1.AdminReg); //secured
//-----about routes------
router.get('/aboutmeget/:id', about_1.Aboutmeget);
router.patch('/aboutmepatch/:id', authorization_1.Authorize, about_1.Aboutmepatch);
//-----skills routes------
router.get('/skillsget', skills_1.Skillsget);
router.post('/skillspost', authorization_1.Authorize, skills_1.Skillspost);
router.delete('/skillsdel/:id', authorization_1.Authorize, skills_1.Skillsdelete);
//-----projects routes------
router.get('/projectsget', projects_1.Projget);
router.post('/projectspost', authorization_1.Authorize, projects_1.Projpost);
router.delete('/projectsdel/:id', authorization_1.Authorize, projects_1.Projdelete);
//-----blog routes------
router.get('/blogget', blog_1.Blogget);
router.get('/bloggetone/:id', blog_1.Bloggetone);
router.post('/blogpost', authorization_1.Authorize, multer_1.default.single('image'), blog_1.Blogpost);
router.delete('/blogdel/:id', authorization_1.Authorize, blog_1.Blogdelete);
router.put('/blogclap/:id', blog_1.Blogclap);
//-----education routes------
router.get('/eduget', education_1.Eduget);
router.post('/edupost', authorization_1.Authorize, education_1.Edupost);
router.delete('/edudel/:id', authorization_1.Authorize, education_1.Edudelete);
//-----references routes------
router.get('/refget', references_1.Refget);
router.post('/refpost', authorization_1.Authorize, references_1.Refjpost);
router.delete('/refdel/:id', authorization_1.Authorize, references_1.Refdelete);
//-----message routes------
router.get('/msgget', authorization_1.Authorize, message_1.Mesjget); //secured
router.post('/msgpost', message_1.Mesjpost); //non secured
router.delete('/msgdel/:id', authorization_1.Authorize, message_1.Mesjdelete);
//-----user data route------
router.post('/ipdata', userinfo_1.Usersdata);
router.get('/ipdataget', authorization_1.Authorize, userinfo_1.Userdataget);
exports.default = router;
//# sourceMappingURL=routes.js.map