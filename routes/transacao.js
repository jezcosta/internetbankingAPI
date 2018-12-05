module.exports = (app) => {
    const { transacao, usuario } = app.controllers;

    app.post('/api/v1/transacoes/transferir', usuario.verificaJWT, transacao.transferir);
};