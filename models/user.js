const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const UserSchema = mongoose.Schema({
  nombre:{type:String},
  edad:{tyoe:Number},
  celular:{type:Number},
  email:{type:String},
  password:{type:String},
  nombreTutor:{type:String},
  telefonoTutor:{type:Number},
  historial:{
    type:[
      'Mixed'
    ]
  }
});

const User = module.exports = mongoose.model('User',UserSchema);

module.exports.getUserById = function (id,callback) {
  User.findById(id,callback);
}

module.exports.getUserByEmail = function (email,callback) {
  const query = {email:email}
  User.findOne(query,callback);
}

module.exports.addUser = function(newUser, callback){
  console.log("aqui empieza a agregar usuarios");
  console.log(newUser);
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) =>{
      if (err) throw err;
      callback(null, isMatch);
    });
}
