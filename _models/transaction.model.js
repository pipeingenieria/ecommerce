const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema({
    monto: String,
    concepto: String,
    descripcion: String,
    moneda: String,
    nombresNatural: String,
        apellidosNatural: String,
        telefonoNatural:String,
        emailNatural: String,
        identificacionNatural: String,
        nombreComercioNatural: String,
        passwordNatural: String,
        apiKey: String,
        imagenNatural: String,
        estadoNatural: String,
        rolNatural: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('transaction', TransactionSchema);