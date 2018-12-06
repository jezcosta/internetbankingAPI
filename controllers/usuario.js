module.exports = (app) => {
    const jwt = require('jsonwebtoken');
    const Usuario = app.models.Usuario;

    const usuarioService = {
        login(req, res) {
            res.setHeader('Content-Type', 'application/json');
            if(req.body.cpf === '123' && req.body.senha === '123'){
                //auth ok
                const id = 1; //esse id viria do banco de dados
                var token = jwt.sign({ id }, process.env.SECRET, {
                    expiresIn: 600
                });
                res.status(200).send(JSON.stringify({ success: true, token: token }));
            }
            
            res.status(500).send(JSON.stringify({ success: false, erro:"Login Inválido" }));
        },
        logout(req, res) {
            res.status(200).send({ auth: false, token: null });
        },
        getInfo(req, res) {
            //chama models/regras de negocio aqui
            res.send('pega informacoes pessoais do usuario');
        },
        listar(req, res) {
            Usuario
            .find({})
            .then(data => {
                res.status(200).send(data);
            }).catch(e => {
                res.status(400).send(e)
            });
        }
    };
    return usuarioService;
};