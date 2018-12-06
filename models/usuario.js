'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = () => {
    const Usuario =  Schema({ 
        nmUsuario: {type: String },
        sobrenomeUsuario: {type: String},
        nrBanco: {type: Number},
        nrAgencia: {type: Number},
        nrConta: {type: Number},
        vlSaldo: {type: Number},
        dsSenha: {type: String},
        nrCPF: {type: Number },
        dsEmail: {type: String}                            
    });

    return mongoose.model('Usuario', Usuario);
}