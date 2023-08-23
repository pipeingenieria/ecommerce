'use strict';
// get dependencies
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/* Dependencias del Mailer */
const cors = require("cors");
const configMensaje = require("./configMensaje");



const path = require('path');
const fs = require('fs');
const multer = require('multer');   

const router = express.Router();
const DIR = './src/assets/uploads';
 
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
    }
});
let upload = multer({storage: storage});

// parse requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Enable CORS for all HTTP methods
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use(express.static("tejido2")); // myApp will be the same folder name.


// Configuring the database
const config = require('./config.js');
const mongoose = require('mongoose');
require('./product.routes.js')(app);


mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(config.url3, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// default route
/* app.get('/', (req, res) => {
    res
    .status(200)
    .send('Tejido Dorado Api, En Linea : Estado = OK')
    .end();
}); */
app.get("/", function (req, res,next) {
  res.redirect("/"); 
 });

app.get('/api', function (req, res) {
    res.end('file catcher example');
  });

  app.post('/api/upload',upload.single('photo'), function (req, res) {
    if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });
    
      } else {
        console.log('file received');
        return res.send({
          success: true
        })
      }
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

// listen on port 3000
/* app.listen(config.serverport, () => {
    console.log("Server is listening on port 3000");
}); */