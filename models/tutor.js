const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const TutorSchema = mongoose.Schema({
  nombre:{type:String},
  edad:{tyoe:Number},
  celular:{type:Number},
  email:{type:String}
});

const Tutor = module.exports = mongoose.model('Tutor',TutorSchema);

module.exports.getTutorById = function (id,callback) {
  Tutor.findById(id,callback);
}

module.exports.getTutorByEmail = function (email,callback) {
  const query = {email:email}
  Tutor.findOne(query,callback);
}

module.exports.addTutor = function(newTutor, callback){
  console.log("aqui empieza a agregar los tutores");
  console.log(newTutor);
  newTutor.save(callback);
}
