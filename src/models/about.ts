import * as mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema({
    about: {
      type: String,
    },
    vidUrl: {
      type: String,
    },
    datePosted:{
      type: Date,
      default: new Date(),
    },
})

export default mongoose.model('About', aboutSchema);