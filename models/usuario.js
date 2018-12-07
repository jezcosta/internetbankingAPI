'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema =  new Schema({ 
    nmUsuario: {type: String, required: true},
    sobrenomeUsuario:  {type: String, required: true},
    dsSenha:   {type: Number, required: true},
    nrCPF: {type: String, unique: true, required: true },
    dsEmail:  {type: String, required: true}
});

module.exports = mongoose.model('Usuario', schema); 
