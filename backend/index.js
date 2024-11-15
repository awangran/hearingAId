const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const url = "mongodb+srv://awangran:hearingaid@cluster0.zkr03.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const PORT = 5555;
const UsuarioModel = require("./models/usuarios")

const app = express()
app.use(express.json())
app.use(cors())

mongoose
    .connect(url)
    .then(() => {
        console.log('db conectada');
        app.listen(PORT, () => {
            console.log(`port: ${PORT}`);
        });
    }) 
    .catch((err) => {
        console.log(err)
    })

app.post('/signup', (req,res) => {
    UsuarioModel.create(req.body)
    .then(usuarios => res.json(usuarios))
    .catch(err => res.json(err))
})

app.post('/login', (req,res) => {
    const {email, password} = req.body;
    UsuarioModel.findOne({email:email})
    .then(user => {
        if (user) {
            if(user.password === password) {
                res.json("Success")
            } else {
                res.json("contraseña incorrecta")
            }
        } else {
            res.json("no se encontro usuario")
        }
    })
})

