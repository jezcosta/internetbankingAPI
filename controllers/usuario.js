module.exports = (app) => {
    const jwt = require('jsonwebtoken');
    const Usuario = app.models.Usuario;
    const bcrypt = require('bcrypt');

    const usuarioService = {
        async login(req, res) {
            res.setHeader('Content-Type', 'application/json');
            const cpf = req.body.cpf;
            const senha = req.body.senha;

            Usuario.findOne({ nrCPF: cpf })
                .then(data => {
                    const usuario = data.toObject();
                    console.log(usuario);
                    if (usuario && bcrypt.compareSync(senha, usuario.dsSenha)) {
                        const token = jwt.sign({ usuarioId: usuario._id }, process.env.SECRET, {
                            expiresIn: 600
                        });
                        res.status(200).send(JSON.stringify({ success: true, token: token }));
                    } else {
                        res.status(500).send(JSON.stringify({ success: false, erro:"Login Inválido" }));
                    }
                }).catch(e => {
                    res.status(400).send(e);
                });
        },
        logout(req, res) {
            res.status(200).send({ auth: false, token: null });
        },
        getInfo(req, res) {
            console.log(req.userId);
            Usuario.findById(req.userId)   
                .then(data => {
                    res.status(200).send(data);
                }).catch(e => {
                    res.status(400).send(e);
                });
        },
        listar(req, res) {
            Usuario
                .find({})
                .then(data => {
                    res.status(200).send(data);
                }).catch(e => {
                    res.status(400).send(e)
                });
        },
        adicionar(req, res) {
            if (req.body.dsSenha)
                req.body.dsSenha = bcrypt.hashSync(req.body.dsSenha, 10);
            else 
                res.status(500).send(JSON.stringify({ success: false, erro:"Senha inválida" }));

            Usuario.create(req.body)
                .then(x => { 
                res.status(201).send({
                    message: 'Usuario cadastrado com sucesso!'});
            }).catch(e => {
                res.status(400).send({
                    message: 'Falha ao cadastrar o Usuario!',
                    data: e
                });
            });
        }
    };
    return usuarioService;
};