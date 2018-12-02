const conn = require('./connection.js');
const mongoose = require('mongoose');

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
/* 
const Freddy = mongoose.model('usuarios')

new Freddy ({
    nmUsuario: "Freddy",
    sobrenomeUsuario: "Henrique",
    nrBanco: 011,
    nrAgencia: 21343,
    nrConta: 33443112,
    vlSaldo: 15020.00,
    dsSenha: 12324,
    nrCPF: 12231331231,
    dsEmail: 'freddyo@gmail.com'
}).save().then(() => {console.log("Usuário criado com sucesso!")})
  .catch((err) => {console.log("Houve um erro ao registrar o usuário: " +err)}) */