module.exports = (app) => {
    const { transacao } = app.controllers;
    const { autenticacao } = app.middlewares;


    app.post('/api/v1/transacoes/transferir', autenticacao.verificaJWT, transacao.transferir);
};