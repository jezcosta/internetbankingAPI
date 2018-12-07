
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema =  new Schema({  
    usuario: {type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true},
    nrBanco: {type: Number, required: true},
    nrAgencia: {type: Number, required: true},
    nrConta: {type: Number, required: true},
    vlSaldo: {type: Number, required: true}                           
});


module.exports = mongoose.model('Conta', schema);  