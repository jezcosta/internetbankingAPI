module.exports = (app) => {
    const { conta } = app.controllers;
    const { autenticacao } = app.middlewares;

    app.get('/api/v1/conta', autenticacao.verificaJWT, conta.getInformacoesConta);
    app.post('/api/v1/conta', autenticacao.verificaJWT, conta.salvaConta);
    
    app.post('/api/v1/conta/favorecidos', autenticacao.verificaJWT,conta.getFavorecidos);
    app.post('/api/v1/conta/criar-favorecido', autenticacao.verificaJWT, conta.salvaFavorecido);
    app.put('/api/v1/conta/favorecidos/:id', autenticacao.verificaJWT, conta.atualizarFavorecido);
    app.delete('/api/v1/conta/favorecidos/:id', autenticacao.verificaJWT, conta.deletarFavorecido);

    app.get('/api/v1/extrato', autenticacao.verificaJWT, conta.getExtrato);
    app.post('/api/v1/extrato', autenticacao.verificaJWT, conta.salvaExtrato);
};