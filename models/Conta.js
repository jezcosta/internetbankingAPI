module.exports = () => {
    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    const schema =  Schema({ 
        usuario: {type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true},
        nrBanco: {type: Number, required: true},
        nrAgencia: {type: Number, required: true},
        nrConta: {type: Number, unique: true, required: true},
        vlSaldo: {type: Number, required: true},
        favorecidos: {type: Array}              
    });

    return mongoose.model('Conta', schema);
}