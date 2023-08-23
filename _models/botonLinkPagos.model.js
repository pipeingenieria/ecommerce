const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
        idButton: String,
        idLink: String,
        apiKey: String,
        concepto: String,
        descripcion: String,
        monto: String,
        colorButton: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('button', ClientSchema);