import * as mongoose from 'mongoose';

const projectsSchema = new mongoose.Schema({
    url:{
      type: String,
    },
    repo:{
      type: String,
      require
    },
    stack:{
      type: String,
      require
    },
    comment:{
      type: String,
      require
    },
    datePosted:{
      type: Date,
      default: new Date(),
    },
})

export default mongoose.model('Projects', projectsSchema);