import * as mongoose from 'mongoose';

const ipSchema = new mongoose.Schema({
    ip:{
      type: String,
      require
    },
    city:{
      type: String,
      require
    },
    region:{
      type: String,
      require
    },
    country_name:{
      type: String,
      require
    },
    languages:{
      type: String,
    },
    emoji_flag:{
      type: String,
      require
    },
    currency:{
      type: String,
      require
    },
    time_zone:{
      type: String,
      require
    },
    threat:{
      type: String,
      require
    },
    datePosted:{
      type: Date,
      default: new Date(),
    },
})

export default mongoose.model('Ipdata', ipSchema);