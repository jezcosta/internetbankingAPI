const mongoose = require('mongoose');
const conn = require('../models/connection.js');

// Model Usuarios
// Definindo o Model
const UsuarioSchema =  mongoose.Schema({ 
    nmUsuario: {type: String, required: true},
    sobrenomeUsuario: {type: String, required: true},
    nrBanco: {type: Number, required: true},
    nrAgencia: {type: Number, required: true},
    nrConta: {type: Number, required: true},
    vlSaldo: {type: Number, required: true},
    dsSenha: {type: String, required: true},
    nrCPF: {type: Number, required: true},
    dsEmail: {type: String, required: true}                            
});

// Collection
mongoose.model('usuarios', UsuarioSchema);

// const Osmar = mongoose.model('usuarios')

// new Osmar ({
//     nmUsuario: "Osmar",
//     sobrenomeUsuario: "Lúcio",
//     nrBanco: 011,
//     nrAgencia: 213,
//     nrConta: 334112,
//     vlSaldo: 1500.00,
//     dsSenha: 1234,
//     nrCPF: 1223131231,
//     dsEmail: 'osmar.lucio@gmail.com'
// }).save().then(() => {console.log("Usuário criado com sucesso!")})
//   .catch((err) => {console.log("Houve um erro ao registrar o usuário: " +err)})