import * as mongoose from 'mongoose';

const skillsSchema = new mongoose.Schema({
    category:{
      type: String,
      require,
    },
    skill:{
      type: String,
      require
    },
    rank:{
      type: Number,
      require
    },
    datePosted:{
      type: Date,
      default: new Date(),
    },
})

export default mongoose.model('Skills', skillsSchema);