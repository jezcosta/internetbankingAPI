module.exports = (app) => {
    const { transacao } = app.services;

    app.post('/api/v1/transacoes/transferir', transacao.transferir);
};