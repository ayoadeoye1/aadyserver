import * as express from 'express';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import * as mongoose from 'mongoose';

import router from './routes';
dotenv.config();

const PORT = process.env.PORT;

const app = express();

const MONGO_URL = process.env.MONGO_URL;

const dbConnect = async() =>{
    try {
        await mongoose.connect(MONGO_URL, {
          dbName: 'portifolio'
        });
        console.log('DB connected')
    } catch (error) {
        console.log(error.message);
    }
}

dbConnect().then(() =>{
  app.listen(PORT, () => {
    console.log(`listening for requests on port ${PORT}`);
  })
})

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))

app.use(cors({
  origin: ['https://ayoadeoye-portfolio.netlify.app'],
  methods: ['GET', 'POST', 'DELETE', 'PATCH', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true 
}));

app.use('/api', router);
