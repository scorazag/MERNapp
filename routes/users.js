const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database');
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'esas23m6ammgj3dd@ethereal.email',
        pass: 'ATaMzvHFTXuPtNU6hn'
    }
});


router.post('/register',(req,res,next) =>{
  let newUser = new User({
    nombre:req.body.nombre,
    edad:req.body.edad,
    celular:req.body.celular,
    email:req.body.email,
    password:req.body.password,
    paquete:req.body.paquete,
    nombreTutor:req.body.nombreTutor,
    telefonoTutor:req.body.telefonoTutor
  });

  User.addUser(newUser,(err, user) => {
    if (err) {
      res.json({succes: false, msg:'Error al registrar Usuario'});
    } else{
      res.json({succes: true, msg:'Usuario registrado'});
      //aqui manda el email de bienvenida
      /*const mailOptions = {
        from: 'esas23m6ammgj3dd@ethereal.email', // sender address
        to: newUser.email, // list of receivers
        subject: 'Bienvenido a Sk8topia' , // Subject line
        html: '<p> Hola  te Damos la bienvenida a Dino Delivery</p>'
      };
      console.log("Aqui se ejecutando el sendmail");
      transporter.sendMail(mailOptions, function (err,info){
        if(err)
          console.log(err)
        else
          console.log(info);
      });*/
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
    User.comparePassword(password, user.password, (err, isMatch) =>{
       if (err) throw err;
        if(isMatch){
          const token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn : 604800
        });
        res.json({
         success: true,
         token: 'JWT '+token,
         user: {
           id: user._id,
           nombre: user.nombre,
           celular: user.celular,
           email: user.email,
           paquete:user.paquete,
           nombreTutor:user.nombreTutor,
           telefonoTutor:user.telefonoTutor
         }
        });
        } else {
       return res.json({success:false, msg:'contraseña incorrecta'});

      }
    });
  });
});

//Profile
//parametros se protegen con passport.authenticate
router.get('/profile', passport.authenticate('jwt',{session:false}), (req,res,next) => {
  res.json({user: req.user});
});
router.get('/validate', (req,res,next) => {
  res.send("validate");
});

//ruta para el update del paquete
router.post('/updatePaquete',(req,res,next) =>{
  const email = req.body.email
  const paquete =req.body.paquete

  User.update({email:email},{$set:{paquete:paquete}},{ multi: false, upsert: false}).then(function (paquete) {
    res.json({succes:true,msg:"Paquete actualizo"});
  });
});

//ruta para ver historial
router.get('/getHistorial',(req,res,next) =>{
  res.send("aqui recupera el historial de clases");
})

router.get('/getTodosUsuarios',(req,res,next) => {
  User.find({}, function (err,users) {
    res.send(users)
  })
})

module.exports = router;
