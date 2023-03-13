const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const MONGO_URI = process.env.MONGODB_URI;

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'happdb'
})
.then(() => console.log('Connected to Mongo DB.'))
.catch(err => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
  email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
  password: String,
  // hash: String,
  // salt: String,
});

const User = mongoose.model('user', userSchema);

const restaurantSchema = new Schema({
  image: String,
  name: {type: String, required: [true, "can't be blank"], index: true},
  address: {type: String},
  phone: String,
  description: {type: String},
  hours: Array,
});

const Restaurant = mongoose.model('restaurant', restaurantSchema);

// exports all the models to be used in the controller
module.exports = {
  User,
  Restaurant
};