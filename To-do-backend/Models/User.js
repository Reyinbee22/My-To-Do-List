const mongoose = require('mongoose');
const Schema = mongoose.Schema; // Add this line to define Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  tasks: {
    type: Schema.Types.ObjectId, 
    ref: 'Task'
  },
});

module.exports = mongoose.model('User', UserSchema);
