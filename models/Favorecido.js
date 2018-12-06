
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = () => {
    const Favorecido = Schema ({
        nmFavorecido: {type: String, required:  [true, 'Nome é obrigatório']},
        sobrenomeFavorecido: {type: String, required: [true, 'Sobrenome é obrigatório']},
        nrBanco: {type: Number, required: [true, 'Código do Banco é obrigatório']},
        nrAgencia: {type: Number, required: [true, 'Número da Agencia é obrigatório']},
        nrConta: {type: Number, required:  [true, 'Número da Conta é obrigatório']},
        nrCPF: {type: Number, required:  [true, 'CPF é obrigatório']},
        dsEmail: {type: String, required:  [true, 'E-mail é obrigatório']}      
    });

    return mongoose.model('Favorecido', Favorecido);
}