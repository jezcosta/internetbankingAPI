const conn = require('./connection.js');
const mongoose = require('mongoose');

// Model Benificiario
// Definindo o Model
const BenificiarioSchema =  mongoose.Schema({ 
    nmBenificiario: {type: String, required: true},
    sobrenomeBenificiario: {type: String, required: true},
    nrBanco: {type: Number, required: true},
    nrAgencia: {type: Number, required: true},
    nrConta: {type: Number, required: true},
    nrCPF: {type: Number, required: true},
    dsEmail: {type: String, required: true}                            
});

// Collection
mongoose.model('benificiarios', BenificiarioSchema);

/* const Juliett = mongoose.model('benificiarios') */

/* new Juliett ({
    nmBenificiario: "Juliett",
    sobrenomeBenificiario: "Ramos",
    nrBanco: 0113,
    nrAgencia: 24213,
    nrConta: 7342112,
    nrCPF: 82231321231,
    dsEmail: 'ju.lietem@gmail.com'
}).save().then(() => {console.log("Benificiário criado com sucesso!")})
  .catch((err) => {console.log("Houve um erro ao registrar o benificiário: " +err)}) */