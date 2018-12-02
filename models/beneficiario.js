const mongoose = require('mongoose');

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
module.exports = benificiarios;
