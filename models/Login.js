const conn = require('./connection.js');
const mongoose = require('mongoose');

// Model Login
// Definindo o Model
const LoginSchema =  mongoose.Schema({ 
    nmUsuario: {type: Schema.Types.ObjectId, ref: usuarios, required: true},
    sobrenomeUsuario: {type: Schema.Types.ObjectId, ref: usuarios, required: true},
    nrCPF: {type: Schema.Types.ObjectId, ref: usuarios, required: true},
    dsSenha: {type: Schema.Types.ObjectId, ref: usuarios, required: true}
});

// Collection
mongoose.model('login', LoginSchema);
