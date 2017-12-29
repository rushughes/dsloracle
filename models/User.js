const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  firstname: String,
  surname: String,
  email: String,
  photo: String,
},
{
  timestamps: true,
});

mongoose.model('users', userSchema);
