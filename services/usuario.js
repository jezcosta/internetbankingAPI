module.exports = (app) => {
    const jwt = require('jsonwebtoken');

    const usuarioService = {
        login(req, res) {
            if(req.body.cpf === '123' && req.body.senha === '123'){
                //auth ok
                const id = 1; //esse id viria do banco de dados
                var token = jwt.sign({ id }, process.env.SECRET, {
                    expiresIn: 600
                });
                    res.status(200).send({ success: true, token: token });
            }
            
            res.status(500).send('Login inválido!');
        },
        verificaJWT(req, res, next) {
            var token = req.headers['x-access-token'];
            if (!token) return res.status(401).send({ auth: false, message: 'Token não informado' });
            
            jwt.verify(token, process.env.SECRET, function(err, decoded) {
                if (err) return res.status(500).send({ auth: false, message: 'Token inválido' });
                
                // se tudo estiver ok, salva no request para uso posterior
                req.userId = decoded.id;
                next();
            });
        },
        logout(req, res) {
            res.status(200).send({ auth: false, token: null });
        },
        getInfo(req, res) {
            //chama models/regras de negocio aqui
            res.send('pega informacoes pessoais do usuario');
        }
    };
    return usuarioService;
};