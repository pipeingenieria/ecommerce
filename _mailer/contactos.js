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
            pass: "payment2019*" // Cambialo por tu password
        }
    });

    if (formulario.nombreComercioNatural) {
        const mailOptions = {
            from: '”PAYMENTSAFES S.A.S 👻” <paymentsafes55@gmail.com>',
            to: "pipeingenieria@gmail.com, paymentsafes55@gmail.com, nixonbrk@hotmail.com, henaovillac@gmail.com, panantony7@gmail.com, " + formulario.emailNatural, // Cambia esta parte por el destinatario
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

        transporter.sendMail(mailOptions, function(err, info) {
            if (err)
                console.log(err)
            else
                console.log(info);
        });

    } else {
        const mailOptions = {
            from: 'TEJIDO DORADO S.A.S 👻” <paymentsafes55@gmail.com>',
            to: "pipeingenieria@gmail.com, paymentsafes55@gmail.com, nixonbrk@hotmail.com, henaovillac@gmail.com, panantony7@gmail.com, " + formulario.emailJuridica, // Cambia esta parte por el destinatario
            subject: "Tejido Dorado S.A.S",
            html: `
            <!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8">
                <title>Bienvenido</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
              </head>
              <body style="background: black;" class="todoGradiente">

                <style type="text/css">
                </style>

                <head style="">
                  <div class="row">
                    <div class="col-12 todoGradiente" style="border-bottom: solid 3px black; 
                      background: rgba(76,76,76,1);
                        background: -moz-linear-gradient(left, rgba(76,76,76,1) 0%, rgba(89,89,89,1) 12%, rgba(102,102,102,1) 25%, rgba(71,71,71,1) 39%, rgba(44,44,44,1) 50%, rgba(0,0,0,1) 51%, rgba(17,17,17,1) 60%, rgba(43,43,43,1) 76%, rgba(28,28,28,1) 91%, rgba(19,19,19,1) 100%);
                        background: -webkit-gradient(left top, right top, color-stop(0%, rgba(76,76,76,1)), color-stop(12%, rgba(89,89,89,1)), color-stop(25%, rgba(102,102,102,1)), color-stop(39%, rgba(71,71,71,1)), color-stop(50%, rgba(44,44,44,1)), color-stop(51%, rgba(0,0,0,1)), color-stop(60%, rgba(17,17,17,1)), color-stop(76%, rgba(43,43,43,1)), color-stop(91%, rgba(28,28,28,1)), color-stop(100%, rgba(19,19,19,1)));
                        background: -webkit-linear-gradient(left, rgba(76,76,76,1) 0%, rgba(89,89,89,1) 12%, rgba(102,102,102,1) 25%, rgba(71,71,71,1) 39%, rgba(44,44,44,1) 50%, rgba(0,0,0,1) 51%, rgba(17,17,17,1) 60%, rgba(43,43,43,1) 76%, rgba(28,28,28,1) 91%, rgba(19,19,19,1) 100%);
                        background: -o-linear-gradient(left, rgba(76,76,76,1) 0%, rgba(89,89,89,1) 12%, rgba(102,102,102,1) 25%, rgba(71,71,71,1) 39%, rgba(44,44,44,1) 50%, rgba(0,0,0,1) 51%, rgba(17,17,17,1) 60%, rgba(43,43,43,1) 76%, rgba(28,28,28,1) 91%, rgba(19,19,19,1) 100%);
                        background: -ms-linear-gradient(left, rgba(76,76,76,1) 0%, rgba(89,89,89,1) 12%, rgba(102,102,102,1) 25%, rgba(71,71,71,1) 39%, rgba(44,44,44,1) 50%, rgba(0,0,0,1) 51%, rgba(17,17,17,1) 60%, rgba(43,43,43,1) 76%, rgba(28,28,28,1) 91%, rgba(19,19,19,1) 100%);
                        background: linear-gradient(to right, rgba(76,76,76,1) 0%, rgba(89,89,89,1) 12%, rgba(102,102,102,1) 25%, rgba(71,71,71,1) 39%, rgba(44,44,44,1) 50%, rgba(0,0,0,1) 51%, rgba(17,17,17,1) 60%, rgba(43,43,43,1) 76%, rgba(28,28,28,1) 91%, rgba(19,19,19,1) 100%);
                        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#131313', GradientType=1 ); ">
                      <h3 style="text-align: center; color: white;"><img class="img-fluid" src="https://i.ibb.co/m5mLbDh/Tejido-logo.png" alt="PaymentSafes" width="200" height="200" /></h3>
                      <h3><p style="text-align: center; color: white;" class="text-uppercase"><strong style="color: white;">Tejido Dorado S.A.S<br/></strong></p> </h3>
                      <!-- <p style="text-align: center;">Te damos la bienvenida a nuestra pasarela de pagos donde podras realizar transacciones a todo destino</p> -->
                    </div>
                  </div>
                </head>

                <section>
                  <div>
                    <!--<blockquote>
                      <h4 style="text-align: left;">&nbsp;</h4>
                      <h4 style="text-align: center;"><strong>Estimado Usuario, te haz registrado correctamente a PaymentSafes S.A.S, te invitamos a que confirmes tu cuenta ingresando al siguiente link y cambiar tu contrase&ntilde;a para asi acceder a nuestra plataforma de manera segura.</strong></h4> 
                    </blockquote>-->
                    <p class="text-center" style="color: white; text-align: center;">Señores Tejido Dorado La siguiente persona a continuación nombrada desea hacer contacto con ustedes: </p>
                    <br>
                    <div class="container-fluid mb-5"
                      style=" align-content: center; margin-left: auto;
                      margin-right: auto;">
                      <table class="" style="align-content: center; width: 50%; border: 1px solid white; color: white; margin-left: auto;
                            margin-right: auto;" >
                        <tr style="border: 1px solid white; color: white;">
                            <td style="border: 1px solid white; color: white;">Nombres:</td>
                            <td style="border: 1px solid white; color: white;">&nbsp; ${formulario.nombres}</td>
                          </tr>
                          <tr style="border: 1px solid white; color: white;">
                            <td style="border: 1px solid white; color: white;">Email:</td>
                            <td style="border: 1px solid white; color: white;">&nbsp; ${formulario.email}</td>
                          </tr>
                          <tr style="border: 1px solid white; color: white;">
                            <td style="border: 1px solid white; color: white;">Teléfono:</td>
                            <td style="border: 1px solid white; color: white;">&nbsp; ${formulario.telefono}</td>
                          </tr>
                          <tr style="border: 1px solid white; color: white;">
                            <td style="border: 1px solid white; color: white;">Ciudad:</td>
                            <td style="border: 1px solid white; color: white;">&nbsp; ${formulario.ciudad}</td>
                          </tr>
                          <tr style="border: 1px solid white; color: white;">
                            <td style="border: 1px solid white; color: white;">Mensaje:</td>
                            <td style="border: 1px solid white; color: white;">&nbsp; ${formulario.mensaje}</td>
                          </tr>
                      </table>
                    </div>
                  </div>
                  
                </section>

                <footer style="background: rgba(76,76,76,1);
                        background: -moz-linear-gradient(left, rgba(76,76,76,1) 0%, rgba(89,89,89,1) 12%, rgba(102,102,102,1) 25%, rgba(71,71,71,1) 39%, rgba(44,44,44,1) 50%, rgba(0,0,0,1) 51%, rgba(17,17,17,1) 60%, rgba(43,43,43,1) 76%, rgba(28,28,28,1) 91%, rgba(19,19,19,1) 100%);
                        background: -webkit-gradient(left top, right top, color-stop(0%, rgba(76,76,76,1)), color-stop(12%, rgba(89,89,89,1)), color-stop(25%, rgba(102,102,102,1)), color-stop(39%, rgba(71,71,71,1)), color-stop(50%, rgba(44,44,44,1)), color-stop(51%, rgba(0,0,0,1)), color-stop(60%, rgba(17,17,17,1)), color-stop(76%, rgba(43,43,43,1)), color-stop(91%, rgba(28,28,28,1)), color-stop(100%, rgba(19,19,19,1)));
                        background: -webkit-linear-gradient(left, rgba(76,76,76,1) 0%, rgba(89,89,89,1) 12%, rgba(102,102,102,1) 25%, rgba(71,71,71,1) 39%, rgba(44,44,44,1) 50%, rgba(0,0,0,1) 51%, rgba(17,17,17,1) 60%, rgba(43,43,43,1) 76%, rgba(28,28,28,1) 91%, rgba(19,19,19,1) 100%);
                        background: -o-linear-gradient(left, rgba(76,76,76,1) 0%, rgba(89,89,89,1) 12%, rgba(102,102,102,1) 25%, rgba(71,71,71,1) 39%, rgba(44,44,44,1) 50%, rgba(0,0,0,1) 51%, rgba(17,17,17,1) 60%, rgba(43,43,43,1) 76%, rgba(28,28,28,1) 91%, rgba(19,19,19,1) 100%);
                        background: -ms-linear-gradient(left, rgba(76,76,76,1) 0%, rgba(89,89,89,1) 12%, rgba(102,102,102,1) 25%, rgba(71,71,71,1) 39%, rgba(44,44,44,1) 50%, rgba(0,0,0,1) 51%, rgba(17,17,17,1) 60%, rgba(43,43,43,1) 76%, rgba(28,28,28,1) 91%, rgba(19,19,19,1) 100%);
                        background: linear-gradient(to right, rgba(76,76,76,1) 0%, rgba(89,89,89,1) 12%, rgba(102,102,102,1) 25%, rgba(71,71,71,1) 39%, rgba(44,44,44,1) 50%, rgba(0,0,0,1) 51%, rgba(17,17,17,1) 60%, rgba(43,43,43,1) 76%, rgba(28,28,28,1) 91%, rgba(19,19,19,1) 100%);
                        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#131313', GradientType=1 );">
                  <div class="row">
                    <div class="col-12" style="text-align: center;">
                      <!-- <p>Este mensaje ah sido generado por la pasarela de pagos PaymentSafes S.A.S</p> -->
                      <h5 style="color: white; font-size: 0.9rem;">Dirección: calle 22 # 9 - 60</h5>
                      <h5 style="color: white; font-size: 0.9rem;">Telefono: 8582291</h5>
                      <h5 style="color: white; font-size: 0.9rem;">joyeriatejidodorado@gmail.com</h5>
                      <h5 style="color: white; font-size: 0.9rem;">San Jerónimo, Antioquia, Colombia</h5>
                    </div>
                  </div>
                  
                </footer>

                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

              </body>
            </html>
            
        `
        }
        transporter.sendMail(mailOptions, function(err, info) {
            if (err)
                console.log(err)
            else
                console.log(info);
        });

    }

}