const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

router.post('/register',(req,res,next) =>{
  let newUser = new User({
    nombre:req.body.nombre,
    celular:req.body.celular,
    email:req.body.email,
    password:req.body.password,
  });

  User.addUser(newUser,(err, user) => {
    if (err) {
      res.json({succes: false, msg:'Error al registrar Usuario'});
    } else{
      res.json({succes: true, msg:'Usuario registrado'});
    }
  });
});

router.post('/authenticate',(req,res,next) => {
  const email = req.body.email
  const password = req.body.password

  User.getUserByEmail(email,(err,user) => {
    if (err) throw err;
    if (!user) {
      return res.json({success: false, msg: 'usuario no encontrado'});
    }


  });

});

router.get('/profile',(req,res,next) => {
  res.send("perfil");
});

router.get('/validate',(req,res,next) => {
  res.send("perfil");
});

module.exports = router;
