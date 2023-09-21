"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const routes_1 = require("./routes");
dotenv.config();
const PORT = process.env.PORT;
const app = express();
const MONGO_URL = process.env.MONGO_URL;
const dbConnect = async () => {
    try {
        await mongoose.connect(MONGO_URL, {
            dbName: 'portifolio'
        });
        console.log('DB connected');
    }
    catch (error) {
        console.log(error.message);
    }
};
dbConnect().then(() => {
    app.listen(PORT, () => {
        console.log(`listening for requests on port ${PORT}`);
    });
});
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: ['https://ayoadeoye-portfolio.netlify.app'],
    methods: ['GET', 'POST', 'DELETE', 'PATCH', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
app.use('/api', routes_1.default);
//# sourceMappingURL=index.js.map