const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Model Login
// Definindo o Model
 
const loginSchema =  mongoose.Schema({ 
    nmUsuario: {type: Schema.Types.ObjectId, ref: 'usuario'}
});

// Collection
mongoose.model('login', loginSchema);
