import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  name:  String, 
  lastName: String,
  description: String,
  age: Number,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

module.exports = UserSchema;