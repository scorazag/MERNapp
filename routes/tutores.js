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
        user: 'dm7ml6fp7wk3snrm@ethereal.email',
        pass: 'apS5bxdPwHYdutCCaB'
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

      const mailOptions = {
        from: 'esas23m6ammgj3dd@ethereal.email', // sender address
        to: newTutor.email, // list of receivers
        subject: 'Bienvenido a Sk8topia' , // Subject line
        html: '<p> Hola  te Damos la bienvenida al equpi de Sk8topia confiamos en que seras un exelente instrucctor</p>'
      };
      console.log("Aqui se ejecutando el sendmail");
      transporter.sendMail(mailOptions, function (err,info){
        if(err)
          console.log(err)
        else
          console.log(info);
      });
    }
  });
});


module.exports = router;
