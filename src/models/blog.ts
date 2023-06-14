import * as mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title:{
      type: String,
      require
    },
    imageUrl:{
      type: String,
      require
    },
    blogArticle:{
      type: String,
      require
    },
    clap:{
      type: Number,
      default: 0
    },
    datePosted:{
      type: Date,
      default: new Date(),
    },
})

export default mongoose.model('Blog', blogSchema);