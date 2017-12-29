const mongoose = require('mongoose');
const { Schema } = mongoose;

const landSchema = new Schema({
  x: String,
  y: String,
  district: String,
  description: String,
  _user: { type: Schema.Types.ObjectId, ref: 'Land' },
},
{
  timestamps: true,
});

mongoose.model('land', landSchema);
