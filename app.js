const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
mongoose.connect(config.database);

mongoose.connection.on('connected',()=>{
  console.log("Connectado a la base de datos"+config.database);
});

mongoose.connection.on('error',()=>{
  console.log("Database"+config.database);
});

const app = express();
const users = require('./routes/users');
const tutores = require('./routes/tutores');

const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users',users);
app.use('/tutores',tutores);
app.get('/',(req,res) => {
  res.send('Invalidend Point')
});

app.listen(port,()=>{
  console.log("Servidor arriva todo va estar bien pantrito bb");
})
