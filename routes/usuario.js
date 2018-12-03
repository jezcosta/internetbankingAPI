module.exports = (app) => {
    const { usuario } = app.services;

    app.post('/api/v1/usuario/logon', usuario.login);
    app.get('/api/v1/usuario/logout', usuario.logout);
    app.post('/api/v1/usuario', usuario.verificaJWT, usuario.getInfo);
    // app.post('/api/v1/usuario/verificar', (req, res) => {
    //     res.send('verificar dados da conta');
    //  });
};