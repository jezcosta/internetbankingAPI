module.exports = (app) => {
    const { conta } = app.controllers;
    const { autenticacao } = app.middlewares;

    app.post('/api/v1/conta', autenticacao.verificaJWT, conta.getInformacoesConta);
    app.post('/api/v1/conta/favorecidos', autenticacao.verificaJWT,conta.getFavorecidos);
    app.post('/api/v1/conta/criar-favorecido', autenticacao.verificaJWT, conta.salvaFavorecido);
    app.post('/api/v1/extrato', autenticacao.verificaJWT, conta.getExtrato);
};