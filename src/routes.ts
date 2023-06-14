import * as express from 'express';

import upload from './utils/multer';
import { Aboutmeget, Aboutmepatch } from './controllers/about'
import { Skillsdelete, Skillsget, Skillspost } from './controllers/skills';
import { Projdelete, Projget, Projpost } from './controllers/projects';
import { Blogclap, Blogdelete, Blogget, Bloggetone, Blogpost } from './controllers/blog';
import { Edudelete, Eduget, Edupost } from './controllers/education';
import { Refdelete, Refget, Refjpost } from './controllers/references';
import { Mesjdelete, Mesjget, Mesjpost } from './controllers/message';
import { AdminLogin, AdminReg } from './auth/auth.admin';
import { Userdataget, Usersdata } from './controllers/userinfo';
import { Authorize } from './middlewares/authorization';

const router = express.Router();



//-----auth routes------
router.post('/sign-in', AdminLogin);
router.post('/sign-up', Authorize, AdminReg); //secured


//-----about routes------
router.get('/aboutmeget/:id', Aboutmeget);
router.patch('/aboutmepatch/:id', Authorize, Aboutmepatch);


//-----skills routes------
router.get('/skillsget', Skillsget)
router.post('/skillspost', Authorize, Skillspost)
router.delete('/skillsdel/:id', Authorize, Skillsdelete)


//-----projects routes------
router.get('/projectsget', Projget);
router.post('/projectspost', Authorize, Projpost);
router.delete('/projectsdel/:id', Authorize, Projdelete);


//-----blog routes------
router.get('/blogget', Blogget);
router.get('/bloggetone/:id', Bloggetone);
router.post('/blogpost', Authorize, upload.single('image'), Blogpost);
router.delete('/blogdel/:id', Authorize, Blogdelete);
router.put('/blogclap/:id', Blogclap);


//-----education routes------
router.get('/eduget', Eduget);
router.post('/edupost', Authorize, Edupost);
router.delete('/edudel/:id', Authorize, Edudelete);


//-----references routes------
router.get('/refget', Refget);
router.post('/refpost', Authorize, Refjpost);
router.delete('/refdel/:id', Authorize, Refdelete);


//-----message routes------
router.get('/msgget', Authorize, Mesjget); //secured
router.post('/msgpost', Mesjpost); //non secured
router.delete('/msgdel/:id', Authorize, Mesjdelete);


//-----user data route------
router.post('/ipdata', Usersdata);
router.get('/ipdataget', Authorize, Userdataget);


export default router