var mongoose = require('mongoose');

//configurando mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/db_internetBanking,",{
    useMongoClient: true
}).then(() => {
    console.log('Banco conectado');
}).catch((err) => {
    console.log("Houve um erro ao se conectar ao banco " +err)
});