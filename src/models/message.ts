import * as mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    name:{
      type: String,
      require
    },
    email:{
      type: String,
      require
    },
    message:{
      type: String,
      require
    },
    datePosted:{
      type: Date,
      default: new Date(),
    },
})

export default mongoose.model('Message', messageSchema);