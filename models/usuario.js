var mongoose = require('mongoose');

const UsuarioSchema =  mongoose.Schema({ 
    nmUsuario: {type: String, required: true},
    sobrenomeUsuario: {type: String, required: true},
    nrBanco: {type: Number, required: true},
    nrAgencia: {type: Number, required: true},
    nrConta: {type: Number, required: true},
    vlSaldo: {type: Double, required: true},
    dsSenha: {type: String, required: true},
    nrCPF: {type: Number, required: true},
    dsEmail: {type: String, required: true}                            
});

// Collection
mongoose.model('usuarios', UsuarioSchema);
module.exports = usuarios;
