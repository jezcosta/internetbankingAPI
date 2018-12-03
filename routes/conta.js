module.exports = (app) => {
    const { conta, usuario } = app.services;

    app.post('/api/v1/conta', usuario.verificaJWT, conta.getInformacoesConta);
    app.post('/api/v1/conta/favorecidos', usuario.verificaJWT,conta.getFavorecidos);
    app.post('/api/v1/conta/criar-favorecido', usuario.verificaJWT, conta.salvaFavorecido);
    app.post('/api/v1/extrato', usuario.verificaJWT, conta.getExtrato);
};