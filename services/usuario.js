module.exports = (app) => {
    const usuarioService = {
        login(req, res) {
            //chama models/regras de negocio aqui
            res.send('realiza login do usuario');
        },
        logout(req, res) {
            //chama models/regras de negocio aqui
            res.send('realiza logout do usuario');
        },
        getInfo(req, res) {
            //chama models/regras de negocio aqui
            res.send('pega informacoes pessoais do usuario');
        }
    };
    return usuarioService;
};