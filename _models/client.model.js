const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    nombresJurica: String,
    apellidosJuridica: String,
    telefonoJuridica: String,
    emailJuridica: String,
    identificacionJuridica: String,
    nombreComercioJuridica: String,
    nitJuridica: String,
    representanteJuridica: String,
    idRepreJuridica: String,
    passwordJuridica: String,
    apiKey: String,
    imagenJuridica: String,
    estadoJuridica: String,
    rolJuridica: String,
    tipoCJuridica: String,
    direccionJuridica: String,
    paisJuridica: String,
    ciudadJuridica: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('clientJuridico', ClientSchema);