module.exports = (app) => {
    const transacaoService = {
        transferir(req, res) {
            //chama models/regras de negocio aqui
            res.send('transfere o valor entre contas');
        }
    };
    return transacaoService;
};