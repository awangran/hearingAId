const mongoose = require("mongoose")

const UsuarioSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    clases: Array
})

const UsuarioModel = mongoose.model("usuarios", UsuarioSchema)
module.exports= UsuarioModel