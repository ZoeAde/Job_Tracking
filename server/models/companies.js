var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});
var Schema = mongoose.Schema;

var Company = new Schema({
  companyName: String,
  companyURL: String,
  industry: String,
  location: String,
  positionTitle: String,
  positionUrl: String,
  salary: Number,
  requirements: String,
  contactName: String,
  contactTitle: String,
  contactEmail: String,
  contactPhone: String,
  status: String,
  applied: String,
  recentContact: String,
  notes: String
});

mongoose.connect(process.env.MONGO_URI);
module.exports = mongoose.model("companies", Company);
