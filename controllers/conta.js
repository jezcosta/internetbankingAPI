module.exports = (app) => {
    const Favorecido = app.models.Favorecido;

    const contaService = {
        getInformacoesConta(req, res) {
            //chama models/regras de negocio aqui
            res.send("Envia informacoes da conta");
        },
        getFavorecidos(req, res) {
            Favorecido
            .find({})
            .then(data => {
                res.status(200).send(data);
            }).catch(e => {
                res.status(400).send(e)
            });           
        },
        salvaFavorecido(req, res) {
            //chama models/regras de negocio aqui
            res.send("Salva o Favorecido");
        },
        getExtrato(req, res) {
            //chama models/regras de negocio aqui
            res.send("Envia lista de extrato");
        }
    };
    return contaService;
};