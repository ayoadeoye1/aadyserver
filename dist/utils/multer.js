"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer = require("multer");
const path = require("path");
const upload = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
            cb(new Error('file format not supported'), false);
        }
        cb(null, true);
    }
});
exports.default = upload;
//# sourceMappingURL=multer.js.map