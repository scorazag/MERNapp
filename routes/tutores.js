const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Tutor = require('../models/tutor');

router.get('/',(req,res,next) => {
  res.send("hola desde tutores")
});


router.post('/register',(req,res,next) =>{
  let newTutor = new Tutor({
    nombre:req.body.nombre,
    celular:req.body.celular,
    email:req.body.email
  });

  Tutor.addTutor(newTutor,(err, user) => {
    if (err) {
      res.json({succes: false, msg:'Error al registrar Usuario'});
    } else{
      res.json({succes: true, msg:'Usuario registrado'});
    }
  });
});


module.exports = router;
