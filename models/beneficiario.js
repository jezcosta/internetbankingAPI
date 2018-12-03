const mongoose = require('mongoose');

// Model Benificiario
// Definindo o Model
const BeneficiarioSchema =  mongoose.Schema({ 
    nmBeneficiario: {type: String, required: true},
    sobrenomeBeneficiario: {type: String, required: true},
    nrBanco: {type: Number, required: true},
    nrAgencia: {type: Number, required: true},
    nrConta: {type: Number, required: true},
    nrCPF: {type: Number, required: true},
    dsEmail: {type: String, required: true}                            
});

// Collection
mongoose.model('beneficiarios', BeneficiarioSchema);

/* const Juliett = mongoose.model('benificiarios') */

/* new Juliett ({
    nmBeneficiario: "Juliett",
    sobrenomeBeneficiario: "Ramos",
    nrBanco: 0113,
    nrAgencia: 24213,
    nrConta: 7342112,
    nrCPF: 82231321231,
    dsEmail: 'ju.lietem@gmail.com'
}).save().then(() => {console.log("Beneficiário criado com sucesso!")})
  .catch((err) => {console.log("Houve um erro ao registrar o beneficiário: " +err)}) */