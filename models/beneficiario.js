const mongoose = require('mongoose');
const conn = require('../models/connection.js');

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

const Denis = mongoose.model('benificiarios')

new Denis ({
    nmBenificiario: "Denis",
    sobrenomeBenificiario: "Monte",
    nrBanco: 013,
    nrAgencia: 4213,
    nrConta: 734112,
    nrCPF: 8223131231,
    dsEmail: 'deniss.m@gmail.com'
}).save().then(() => {console.log("Benificiário criado com sucesso!")})
  .catch((err) => {console.log("Houve um erro ao registrar o benificiário: " +err)})