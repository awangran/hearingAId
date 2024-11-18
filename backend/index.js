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
//para crear cuenta
app.post('/signup', (req,res) => {
    UsuarioModel.create(req.body)
    .then(usuarios => res.json(usuarios))
    .catch(err => res.json(err))
})

//para login
app.post('/login', (req,res) => {
    const {email, password} = req.body;
    UsuarioModel.findOne({email:email})
    .then(user => {
        if (user) {
            if(user.password === password) {
                res.json({
                    message: "Success",
                    userId: user._id
                });;
            } else {
                res.json("contraseña incorrecta")
            }
        } else {
            res.json("no se encontro usuario")
        }
    })
})

//para get nombre de clases de un id
app.get('/generate/:id', async (req, res) => {
    try {
      const item = await UsuarioModel.findById(req.params.id);
      if (!item) return res.status(404).send('Item not found');
      res.json(item); 
    } catch (error) {
      res.status(500).send('Server error');
    }
  });
  