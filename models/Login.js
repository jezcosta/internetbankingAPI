const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Model Login
// Definindo o Model
 
const loginSchema =  mongoose.Schema({ 
    nmUsuario: {type: Schema.Types.ObjectId, ref: 'usuario'},
    nrCPF: {type: Schema.Types.ObjectId, ref: 'usuario'},
    dsSenha: {type: Schema.Types.ObjectId, ref: 'usuario'},
    dsEmail: {type: Schema.Types.ObjectId, ref: 'usuario'}
});

// Collection
mongoose.model('login', loginSchema);
