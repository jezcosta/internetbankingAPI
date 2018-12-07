var Usuario = require('../models/usuario')

var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/db_internetBanking')

var usuarios = [
    new Usuario({
        nmUsuario: "Andrey",
        sobrenomeUsuario: "Lemos",
        dsSenha: "alemos123",
        nrCPF: "12312312312",
        dsEmail: "alemos@hotmail.com"      
    }),
    new Usuario({
        nmUsuario: "Cynthia",
        sobrenomeUsuario: "Mori",
        dsSenha: "cmori123",
        nrCPF: "23423423423",
        dsEmail: "cmori@hotmail.com" 
    }),
    new Usuario({
        nmUsuario: "Dannyel",
        sobrenomeUsuario: "Kayke",
        dsSenha: "dkayke123",
        nrCPF: "34534534534",
        dsEmail: "dkayke@hotmail.com"      
    }),
    new Usuario({
        nmUsuario: "Giovanni",
        sobrenomeUsuario: "Oliveira",
        dsSenha: "goliveira123",
        nrCPF: "45645645645",
        dsEmail: "goliveira@hotmail.com"      
    }),
    new Usuario({
        nmUsuario: "Jéssica",
        sobrenomeUsuario: "Costa",
        dsSenha: "jcosta123",
        nrCPF: "56756756756",
        dsEmail: "jcosta@hotmail.com"      
    }),
    new Usuario({
        nmUsuario: "Jéssica",
        sobrenomeUsuario: "Maria",
        dsSenha: "jmaria123",
        nrCPF: "67867867867",
        dsEmail: "jmaria@hotmail.com"      
    })
]

var done = 0

for (var i = 0; i < usuarios.length; i++){
    usuarios[i].save(function(err, res){
        done++
        if(done === usuarios.length){
            exit()
        }
    })
}

function exit(){
    mongoose.disconnect()
}