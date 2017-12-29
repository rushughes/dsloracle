const mongoose = require('mongoose');
const { Schema } = mongoose;

const landSchema = new Schema({
  title: String,
  x: String,
  y: String,
  district: String,
  description: String,
  adult: Boolean,
  _user: { type: Schema.Types.ObjectId, ref: 'Land' },
},
{
  timestamps: true,
});

mongoose.model('land', landSchema);
