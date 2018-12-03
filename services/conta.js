module.exports = (app) => {
    const contaService = {
        getInformacoesConta(req, res) {
            //chama models/regras de negocio aqui
            res.send("Envia informacoes da conta");
        },
        getFavorecidos(req, res) {
            //chama models/regras de negocio aqui
            res.send("Envia lista de favorecidos")            
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