const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Tutor = require('../models/tutor');
const nodemailer = require('nodemailer');

router.get('/',(req,res,next) => {
  res.send("hola desde tutores")
});

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'esas23m6ammgj3dd@ethereal.email',
        pass: 'ATaMzvHFTXuPtNU6hn'
    }
});

router.post('/register',(req,res,next) =>{
  let newTutor = new Tutor({
    nombre:req.body.nombre,
    edad:req.body.edad,
    celular:req.body.celular,
    email:req.body.email
  });

  Tutor.addTutor(newTutor,(err, user) => {
    if (err) {
      res.json({succes: false, msg:'Error al registrar Tutor'});
    } else{
      res.json({succes: true, msg:'Usuario registrado'});
    }
  });
});


module.exports = router;
