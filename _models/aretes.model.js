const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    nombre: String,
    gramos: String,
    descripcion: String,
    referencia: String,
    valor: String,
    foto: String,
    tipoProducto: String
}, {
    timestamps: true
});

module.exports = mongoose.model('aretes', ClientSchema);