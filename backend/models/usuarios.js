const mongoose = require("mongoose")

const NotaSchema = new mongoose.Schema({
    id: { type: String, required: true }, 
    titulo: { type: String, required: true },
    clase: { type: String, required: true },
    contenido: { type: String, required: true },
  });

const UsuarioSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    clases: Array,
    notes: [NotaSchema],
})

const UsuarioModel = mongoose.model("usuarios", UsuarioSchema)
module.exports= UsuarioModel