module.exports = (app) => {
    const { transacao, usuario } = app.services;

    app.post('/api/v1/transacoes/transferir', usuario.verificaJWT, transacao.transferir);
};