import * as mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    username:{
      type: String,
      require
    },
    email:{
      type: String,
      require
    },
    password:{
      type: String,
      require
    },
})

export default mongoose.model('AdminUser', adminSchema);