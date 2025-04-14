const mongoose = require("mongoose"); // importando el componente mogoose
const beneficiarioSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  telefono: {
    type: int,
    required: true,
  },
  documento: {
    type: int,
    required: true,
  },
  numbeneficiarios: {
    type: int,
    required: true,
  },
  estado: {
    type: Boolean,
    required: true,
  },
  fecharegistro: {
    type: Date,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  observaciones: {
    type: String,
    required: true,
  },
  nivelvulnerabilidad: {
    type: String,
    required: true,
  }
});
module.exports = mongoose.model("Usuario", usuarioSchema);
