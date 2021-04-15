const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
  }, { collection : 'post' });
   
  
  const Post = mongoose.model('Post', schema);
  module.exports = Post;

  schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
}, { collection : 'post' });

//const User = mongoose.model('User', schema);  //Gabe addition

module.exports = mongoose.model('Post', schema);