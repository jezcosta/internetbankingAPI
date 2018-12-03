module.exports = (app) => {
    const { conta } = app.services;

    app.post('/api/v1/conta', conta.getInformacoesConta);
    app.post('/api/v1/conta/favorecidos', conta.getFavorecidos);
    app.post('/api/v1/conta/criar-favorecido', conta.salvaFavorecido);
    app.post('/api/v1/extrato', conta.getExtrato);
};