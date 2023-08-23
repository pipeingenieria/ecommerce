const configMensaje = require("./configMensaje");
const mailTransaction = require("./mailTransaction");
const enviarAmigo = require("./_mailer/enviarAmigo");
const contactos = require("./_mailer/contactos");
const confirmarCompra = require("./_mailer/confirmarCompra");
module.exports = (app) => {
    const products = require('./product.controller.js');

    /* // Create a new Product
    app.post('/products', products.create);

    // Retrieve all Products
    app.get('/products', products.findAll);

    // Retrieve a single Product with productId
    app.get('/products/:productId', products.findOne);

    // Update a Note with productId
    app.put('/products/:productId', products.update);

    // Delete a Note with productId
    app.delete('/products/:productId', products.delete); */

    // Crear un nuevo usuario
    app.post('/createProduct', products.createProduct);
    //Obtener Productos
    app.post('/getProduct', products.getProduct);
    //Update Productos
    app.post('/updateProduct', products.updateProduct);
    //Delte Productos
    app.post('/deleteProduct', products.deleteProduct);
    //GETALLPRODUCTS Productos
    app.get('/getAllProducts', products.getAllProducts);
    /* SERVICIO DE MAILER */
    app.post("/formulario", (req, res) => {
        configMensaje(req.body);
        res.status(200).send();
    });

    app.post("/mailTransaction", (req, res) => {
        mailTransaction(req.body);
        res.status(200).send();
    });

    app.post("/developMail", (req, res) => {
        mailTransaction(req.body);
        res.status(200).send();
    });

    app.post("/enviarAmigo", (req, res) => {
        enviarAmigo(req.body);
        res.status(200).send();
    });

    app.post("/contactos", (req, res) => {
        contactos(req.body);
        res.status(200).send();
    });

    app.post("/confirmarCompra", (req, res) => {
        confirmarCompra(req.body);
        res.status(200).send();
    });
    /* FIN - SERVICIO DE MAILER */



}