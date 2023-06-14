import * as mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
    institution:{
      type: String,
      require
    },
    course:{
      type: String,
      require
    },
    duration:{
      type: String,
      require
    },
    datePosted:{
      type: Date,
      default: new Date(),
    },
})

export default mongoose.model('Education', educationSchema);