'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema =  new Schema({ 
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'},   
    vlTransacao: {type: String},
    dtTransacao: {type: Date, default: Date.now()}, 
    tpTransacao: {type: String, enum: ["debito", "credito"]}
});


module.exports = mongoose.model('Transacao', schema); 