// Carregando módulos
const mongoose = require('mongoose');

// Configurações
    mongoose.Promise = global.Promise;

    mongoose.connect('mongodb://localhost/db_internetBanking')
        .then(() => { console.log('banco conectado')})
        .catch((err) => {'erro ao conectar o banco ' + err});
