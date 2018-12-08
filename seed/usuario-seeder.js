const consign = require('consign');
const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const mongoHost = process.env.DBHOST || 'mongodb://localhost:27017/api-banking';

const app = express();

consign({})
  .include('models')
  .into(app)
;

const { usuario } = app.models;

var mongoose = require('mongoose')

mongoose.connect(mongoHost)

var usuarios = [
    new usuario({
        nmUsuario: "Andrey",
        sobrenomeUsuario: "Lemos",
        dsSenha: bcrypt.hashSync("alemos123", 10),
        nrCPF: "12312312312",
        dsEmail: "alemos@hotmail.com"      
    }),
    new usuario({
        nmUsuario: "Cynthia",
        sobrenomeUsuario: "Mori",
        dsSenha: bcrypt.hashSync("cmori123", 10),
        nrCPF: "23423423423",
        dsEmail: "cmori@hotmail.com" 
    }),
    new usuario({
        nmUsuario: "Dannyel",
        sobrenomeUsuario: "Kayke",
        dsSenha: bcrypt.hashSync("dkayke123", 10),
        nrCPF: "34534534534",
        dsEmail: "dkayke@hotmail.com"      
    }),
    new usuario({
        nmUsuario: "Giovanni",
        sobrenomeUsuario: "Oliveira",
        dsSenha: bcrypt.hashSync("goliveira123", 10),
        nrCPF: "45645645645",
        dsEmail: "goliveira@hotmail.com"      
    }),
    new usuario({
        nmUsuario: "Jéssica",
        sobrenomeUsuario: "Costa",
        dsSenha: bcrypt.hashSync("jcosta123", 10),
        nrCPF: "56756756756",
        dsEmail: "jcosta@hotmail.com"      
    }),
    new usuario({
        nmUsuario: "Jéssica",
        sobrenomeUsuario: "Maria",
        dsSenha: bcrypt.hashSync("jmaria123", 10),
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