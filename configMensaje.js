/* const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const details = require("./details.json");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(4000, () => {
  console.log("The server started on port 3000 !!!!!!");
});

app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center'>Wellcome to FunOfHeuristic <br><br>😃👻😃👻😃👻😃👻😃</h1>"
  );
});

app.post("/sendmail", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendMail(user, info => {
    console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
    res.send(info);
  });
});

async function sendMail(user, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "paymentsafes55@gmail.com", // Cambialo por tu email
        pass: "payment2019" // Cambialo por tu password
    }
  });

  let mailOptions = {
    from: '"PaymentSafes S.A.S"<paymensafes55@gmail.com>', // sender address
    to: user.email, // list of receivers
    subject: "Mensaje de Prueba 👻", // Subject line
    html: `<h1>Hi ${user.name}</h1><br>
    <h4>Thanks for joining us</h4>`
    
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
} */

// main().catch(console.error);


const nodemailer = require("nodemailer");

module.exports = (formulario) => {
    // var stringify = require('json-stringify'); 
// add this line before nodemailer.createTransport()
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
 var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports 
 auth: {
 user: "paymentsafes55@gmail.com", // Cambialo por tu email
 pass: "payment2019" // Cambialo por tu password
 }
 });

 if(formulario.nombreComercioNatural){
    const mailOptions = {
    from: '”PAYMENTSAFES S.A.S 👻” <paymentsafes55@gmail.com>',
    to: "pipeingenieria@gmail.com, paymentsafes55@gmail.com, nixonbrk@hotmail.com, henaovillac@gmail.com, panantony7@gmail.com, "+formulario.emailNatural, // Cambia esta parte por el destinatario
    subject: "Registro de Usuario en PaymentSafes S.A.S",
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Bienvenido</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
      
      <head style="">
        <div class="row">
          <div class="col-12" style="border-bottom: solid 3px black; background: rgb(228,245,252);
          background: -moz-linear-gradient(top, rgba(228,245,252,1) 2%, rgba(191,232,249,1) 46%, rgba(159,216,239,1) 64%, rgba(42,176,237,1) 83%);
          background: -webkit-linear-gradient(top, rgba(228,245,252,1) 2%,rgba(191,232,249,1) 46%,rgba(159,216,239,1) 64%,rgba(42,176,237,1) 83%);
          background: linear-gradient(to bottom, rgba(228,245,252,1) 2%,rgba(191,232,249,1) 46%,rgba(159,216,239,1) 64%,rgba(42,176,237,1) 83%);
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e4f5fc', endColorstr='#2ab0ed',GradientType=0 );">
          <h3 style="text-align: center;"><img class="img-fluid" src="https://i.ibb.co/yXFj6X4/LOGOPAYMENTSAFESFULL.png" alt="PaymentSafes" width="603" height="230" /></h3>
          <h3><p style="text-align: center;"><strong>${formulario.nombreComercioNatural} Bienvenido A PaymentSafes S.A.S<br/></strong></p> </h3> 
          <p style="text-align: center;">Te damos la bienvenida a nuestra pasarela de pagos donde podras realizar transacciones a todo destino</p>
        </div>
      </div>
    </head>
    
    <section>
      <div class="ml-2">
        <blockquote>
          <h4 style="text-align: left;">&nbsp;</h4>
          <h4 style="text-align: center;"><strong>Estimado Usuario: ${formulario.nombresNatural}, te haz registrado correctamente a PaymentSafes S.A.S, te invitamos a que confirmes tu cuenta ingresando al siguiente link y cambiar tu contrase&ntilde;a para asi acceder a nuestra plataforma de manera segura.</strong></h4>
        </blockquote>
        <p style="text-align: left;"><a href="">Link de Conformacion de cuenta: XXXXXXXX</a></p>
        <p style="text-align: left;"><a href="">Correo Registrado:${formulario.emailNatural} </a></p>
        <p style="text-align: left;"><a href="">Su Contraseña Registrada:${formulario.passwordNatural} </a></p>
        <p style="text-align: left;">&nbsp;</p>
        <p style="text-align: left;"><h5 style="text-align: center;">El equipo de paymentSafes S.A.S</h5></p>
      </div>
    </section>
    
    <footer style="border-top: solid 3px black; background-color: background: rgb(228,245,252);
    background: -moz-linear-gradient(top, rgba(228,245,252,1) 2%, rgba(191,232,249,1) 46%, rgba(159,216,239,1) 64%, rgba(42,176,237,1) 83%);
    background: -webkit-linear-gradient(top, rgba(228,245,252,1) 2%,rgba(191,232,249,1) 46%,rgba(159,216,239,1) 64%,rgba(42,176,237,1) 83%);
    background: linear-gradient(to bottom, rgba(228,245,252,1) 2%,rgba(191,232,249,1) 46%,rgba(159,216,239,1) 64%,rgba(42,176,237,1) 83%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e4f5fc', endColorstr='#2ab0ed',GradientType=0 );>
    <div class="row">
      <div class="col-12" style="text-align: center;">
        <p>Este mensaje ah sido generado por la pasarela de pagos PaymentSafes S.A.S</p> 
        <p>Calle 29 # 41-105 Edificio SOHO oficina 1103. Barrio: El Poblado</p>
        <p>PBX: (574) 4031770</p>
        <p>paymentsafes55@gmail.com</p>
        <p>Medellin-Colombia</p>
      </div>
    </footer>
    
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    
    </body>
    </html>
        `
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err)
      console.log(err)
      else
      console.log(info);
      });

}else{
  const mailOptions = {
    from: '”PAYMENTSAFES S.A.S 👻” <paymentsafes55@gmail.com>',
    to: "pipeingenieria@gmail.com, paymentsafes55@gmail.com, nixonbrk@hotmail.com, henaovillac@gmail.com, panantony7@gmail.com, "+formulario.emailJuridica, // Cambia esta parte por el destinatario
    subject: "Registro de Usuario en PaymentSafes S.A.S",
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Bienvenido</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
      
      <head style="">
        <div class="row">
          <div class="col-12" style="border-bottom: solid 3px black; background: rgb(228,245,252);
          background: -moz-linear-gradient(top, rgba(228,245,252,1) 2%, rgba(191,232,249,1) 46%, rgba(159,216,239,1) 64%, rgba(42,176,237,1) 83%);
          background: -webkit-linear-gradient(top, rgba(228,245,252,1) 2%,rgba(191,232,249,1) 46%,rgba(159,216,239,1) 64%,rgba(42,176,237,1) 83%);
          background: linear-gradient(to bottom, rgba(228,245,252,1) 2%,rgba(191,232,249,1) 46%,rgba(159,216,239,1) 64%,rgba(42,176,237,1) 83%);
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e4f5fc', endColorstr='#2ab0ed',GradientType=0 );">
          <h3 style="text-align: center;"><img class="img-fluid" src="https://i.ibb.co/yXFj6X4/LOGOPAYMENTSAFESFULL.png" alt="PaymentSafes" width="603" height="230" /></h3>
          <h3><p style="text-align: center;"><strong>${formulario.nombreComercioJuridica} Bienvenido A PaymentSafes S.A.S<br/></strong></p> </h3> 
          <p style="text-align: center;">Te damos la bienvenida a nuestra pasarela de pagos donde podras realizar transacciones a todo destino</p>
        </div>
      </div>
    </head>
    
    <section>
      <div class="ml-2">
        <blockquote>
          <h4 style="text-align: left;">&nbsp;</h4>
          <h4 style="text-align: center;"><strong>Estimado Usuario: ${formulario.nombresJuridica}, te haz registrado correctamente a PaymentSafes S.A.S, te invitamos a que confirmes tu cuenta ingresando al siguiente link y cambiar tu contrase&ntilde;a para asi acceder a nuestra plataforma de manera segura.</strong></h4>
        </blockquote>
        <p style="text-align: left;"><a href="">Link de Conformacion de cuenta: XXXXXXXX</a></p>
        <p style="text-align: left;"><a href="">Correo Registrado:${formulario.emailJuridica} </a></p>
        <p style="text-align: left;"><a href="">Su Contraseña Registrada:${formulario.passwordJuridica} </a></p>
        <p style="text-align: left;">&nbsp;</p>
        <p style="text-align: left;"><h5 style="text-align: center;">El equipo de paymentSafes S.A.S</h5></p>
      </div>
    </section>
    
    <footer style="border-top: solid 3px black; background-color: background: rgb(228,245,252);
    background: -moz-linear-gradient(top, rgba(228,245,252,1) 2%, rgba(191,232,249,1) 46%, rgba(159,216,239,1) 64%, rgba(42,176,237,1) 83%);
    background: -webkit-linear-gradient(top, rgba(228,245,252,1) 2%,rgba(191,232,249,1) 46%,rgba(159,216,239,1) 64%,rgba(42,176,237,1) 83%);
    background: linear-gradient(to bottom, rgba(228,245,252,1) 2%,rgba(191,232,249,1) 46%,rgba(159,216,239,1) 64%,rgba(42,176,237,1) 83%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e4f5fc', endColorstr='#2ab0ed',GradientType=0 );>
    <div class="row">
      <div class="col-12" style="text-align: center;">
        <p>Este mensaje ah sido generado por la pasarela de pagos PaymentSafes S.A.S</p> 
        <p>Calle 29 # 41-105 Edificio SOHO oficina 1103. Barrio: El Poblado</p>
        <p>PBX: (574) 4031770</p>
        <p>paymentsafes55@gmail.com</p>
        <p>Medellin-Colombia</p>
      </div>
    </footer>
    
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    
    </body>
    </html>
        `
  }
  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
    console.log(err)
    else
    console.log(info);
    });

}

}