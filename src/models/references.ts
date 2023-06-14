import * as mongoose from 'mongoose';

const referenceSchema = new mongoose.Schema({
    name:{
      type: String,
      require
    },
    occupation:{
      type: String,
      require
    },

    address: String,

    mail: String,

    social: String,
    
    datePosted:{
      type: Date,
      default: new Date(),
    },
})

export default mongoose.model('Reference', referenceSchema);