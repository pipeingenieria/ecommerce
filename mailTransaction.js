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

 if(formulario.emailNatural){
    const mailOptions = {
    from: '”PAYMENTSAFES S.A.S 👻” <paymentsafes55@gmail.com>',
    to: "pipeingenieria@gmail.com, paymentsafes55@gmail.com, nixonbrk@hotmail.com, henaovillac@gmail.com, panantony7@gmail.com, "+formulario.emailNatural, // Cambia esta parte por el destinatario
    subject: "TRANSACCION Exitosa!!.. en PaymentSafes S.A.S",
    html: `
    <!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Correcta</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
	
	<div style="margin-left: auto; margin-right: auto;">
		<head style="">
			<div class="row">
				<div class="col-12" style="border-bottom: solid 3px black; background: rgb(228,245,252);
				background: -moz-linear-gradient(top, rgba(228,245,252,1) 2%, rgba(191,232,249,1) 46%, rgba(159,216,239,1) 64%, rgba(42,176,237,1) 83%);
				background: -webkit-linear-gradient(top, rgba(228,245,252,1) 2%,rgba(191,232,249,1) 46%,rgba(159,216,239,1) 64%,rgba(42,176,237,1) 83%);
				background: linear-gradient(to bottom, rgba(228,245,252,1) 2%,rgba(191,232,249,1) 46%,rgba(159,216,239,1) 64%,rgba(42,176,237,1) 83%);
				filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e4f5fc', endColorstr='#2ab0ed',GradientType=0 );">
				<h3 style="text-align: center;"><img class="img-fluid" src="https://i.ibb.co/yXFj6X4/LOGOPAYMENTSAFESFULL.png" alt="PaymentSafes" width="603" height="230" /></h3>
				<h3><p style="text-align: center;"><strong>Notificaci&oacute;n Transaccional de PaymentSafes<br/></strong></p> </h3> 
				<p style="text-align: center;">Estimado usuario ${formulario.nombreComercioNatural} te enviamos el seguimiento actual de tus transacciones</p>
				<p style="text-align: center;">Su Transacci&oacute;n fue exitosa (A continuaci&oacute;n podra visualizar los Detalles)</p>
			</div>
		</div>
	</head>
	<section style="">
		<div class="row">
			<div class="col-12">
				<p><h4 style="text-align: center;">¡Felicidades!, haz enviado una transacción Exitosa al comercio: (string) con ID: (num)</h4></p>
				<p style="text-align: left;">&nbsp;</p>
				<table style="height: 667px; border-color: black; width: 609px; border: solid 1px black; margin-left: auto; margin-right: auto" border="2" cellspacing="0" cellpadding="5">
					<tbody>
						<tr>
							<td style="width: 177.8px;">Cliente: </td>
							<td style="width: 303.2px;">${formulario.nombresNatural}</td>
						</tr>
						<tr>
							<td style="width: 177.8px;">Nro. Documento: </td>
							<td style="width: 303.2px;">${formulario.identificacionNatural}</td>
						</tr>
						<tr>
							<td style="width: 177.8px;">Correo:</td>
							<td style="width: 303.2px;"> ${formulario.emailNatural}</td>
						</tr>
						<tr>
							<td style="width: 177.8px;">Direcci&oacute;n: </td>
							<td style="width: 303.2px;">EN PROCESO</td>
						</tr>
						<tr>
							<td style="width: 177.8px;">Ciudad:</td>
							<td style="width: 303.2px;"> EN PROCESO</td>
						</tr>
						<tr>
							<td style="width: 177.8px;">Dpto / Estado:</td>
							<td style="width: 303.2px;"> EN PROCESO</td>
						</tr>
						<tr>
							<td style="width: 177.8px;">Pais: </td>
							<td style="width: 303.2px;">EN PROCESO</td>
						</tr>
						<tr>
							<td style="width: 177.8px;">Telefono: </td>
							<td style="width: 303.2px;">${formulario.telefonoNatural}</td>
						</tr>
						<tr>
							<td style="width: 177.8px;">Celular / Movil : </td>
							<td style="width: 303.2px;">${formulario.telefonoNatural}</td>
						</tr>
						<tr>
							<td style="width: 177.8px;">Referencia:</td>
							<td style="width: 303.2px;"> EN PROCESO</td>
						</tr>
						<tr>
							<td style="width: 177.8px;">Fecha y Hora</td>
							<td style="width: 303.2px;">&nbsp;</td>
						</tr>
						<tr>
							<td style="width: 177.8px;">Referencia del Producto: EN PROCESO</td>
							<td style="width: 303.2px;">&nbsp;</td>
						</tr>
						<tr>
							<td style="width: 177.8px;">Descripci&oacute;n Pago : EN PROCESO</td>
							<td style="width: 303.2px;">&nbsp;</td>
						</tr>
						<tr>
							<td style="width: 177.8px;">Nro. Tarjeta<: EN PROCESO/td>
							<td style="width: 303.2px;">&nbsp;</td>
						</tr>
						<tr>
							<td style="width: 177.8px;">Cuotas: EN PROCESO</td>
							<td style="width: 303.2px;">&nbsp;</td>
						</tr>
						<tr>
							<td style="width: 177.8px;">Marca: EN PROCESO</td>
							<td style="width: 303.2px;">&nbsp;</td>
						</tr>
						<tr>
							<td style="width: 177.8px;">CUC/NIT/RUT: EN PROCESO</td>
							<td style="width: 303.2px;">&nbsp;</td>
						</tr>
						<tr>
							<td style="width: 177.8px;">Terminal: EN PROCESO</td>
							<td style="width: 303.2px;">&nbsp;</td>
						</tr>
						<tr>
							<td style="width: 177.8px;">Monto COP :</td>
							<td style="width: 303.2px;"> ${formulario.monto}</td>
						</tr>
						<tr>
							<td style="width: 177.8px;">Recibo/Ticket</td>
							<td style="width: 303.2px;">&nbsp;</td>
						</tr>
						<tr>
							<td style="width: 177.8px;">Autorizaci&oacute;n/CUS:</td>
							<td style="width: 303.2px;"> EN PROCESO</td>
						</tr>
						<tr>
							<td style="width: 177.8px;">Estado: </td>
							<td style="width: 303.2px;">APROBADO</td>
						</tr>
					</tbody>
				</table>
				<p style="text-align: left;">&nbsp;</p>
				<h4><p style="text-align: center;">Este mensaje es generado automáticamente, por favor no responter a este.</p></h4>
			</div>
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

}

}