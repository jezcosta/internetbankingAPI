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
         /*    var transacao = new Transacao();
            transacao.usuario = req.body.usuario;
            transacao.vlTransacao = req.body.vlTransacao;
            transacao.tpTransacao = req.body.tpTransacao;

            transacao
            .save()
            .then(x => { 
                res.status(201).send({
                    message: 'Transacao realizada com sucesso!'});
            }).catch(e => {
                res.status(400).send({
                    message: 'Falha ao realizar transação !',
                    data: e
                });
            }); */
        }
    };
    return contaService;
};