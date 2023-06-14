import * as multer from 'multer';
import * as path from 'path';
import { Request } from 'express';

const upload = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req: Request, file: Express.Multer.File, cb: any) =>{
        
        const ext = path.extname(file.originalname);
        if(ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png'){
            cb(new Error('file format not supported'), false);
        }
        cb(null, true);
    }
})

export default upload;