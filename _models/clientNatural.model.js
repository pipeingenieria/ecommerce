const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    nombres: String,
    apellidos: String,
    telefono: String,
    email: String,
    identificacion: String,
    nombreComercio: String,
    nit: String,
    representante: String,
    idRepre: String,
    password: String,
    apiKey: String,
    imagen: String,
    estado: String,
    rol: String,
    tipoC: String,
    direccion: String,
    pais: String,
    ciudad: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('clientNatural', ClientSchema);