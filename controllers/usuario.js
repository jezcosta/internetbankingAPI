module.exports = (app) => {
    const jwt = require('jsonwebtoken');
    const { usuario } = app.models;
    const bcrypt = require('bcrypt');

    const usuarioService = {
        async login(req, res) {
            res.setHeader('Content-Type', 'application/json');
            const cpf = req.body.cpf;
            const senha = req.body.senha;

            usuario.findOne({ nrCPF: cpf })
                .then(data => {
                    const usuarioRetorno = data.toObject();
                    if (usuarioRetorno && bcrypt.compareSync(senha, usuarioRetorno.dsSenha)) {
                        const token = jwt.sign({ usuarioId: usuarioRetorno._id }, process.env.SECRET, {
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
            var usuario = new Usuario();
            usuario.nmUsuario = req.body.nmUsuario;
            usuario.sobrenomeUsuario = req.body.sobrenomeUsuario;
            usuario.nrBanco = req.body.nrBanco;
            usuario.nrAgencia = req.body.nrAgencia;
            usuario.nrConta = req.body.nrConta;  
            usuario.vlSaldo = req.body.vlSaldo; 
            usuario.nrCPF = req.body.nrCPF
            usuario.dsEmail = req.body.dsEmail

            if (req.body.dsSenha)
                usuario.dsSenha = bcrypt.hashSync(req.body.dsSenha, 10);
            else 
                res.status(500).send(JSON.stringify({ success: false, erro:"Senha inválida" }));

            usuario.save()
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