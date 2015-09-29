var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});
var Schema = mongoose.Schema;

var Company = new Schema({
  name: String,
  url: String,
  location: String,
  industry: String,
  position: String,
  contact: String,
  status: String,
  notes: String
});

mongoose.connect(process.env.MONGO_URI);
module.exports = mongoose.model("companies", Company);
