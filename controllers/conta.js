module.exports = (app) => {
    const { Transacao } = app.models;
    const { Favorecido } = app.models;
    const { Conta } = app.models;

    const contaService = {
        getInformacoesConta(req, res) {
            Conta.find({ usuario: req.userId })
                .then(data => {
                    res.status(200).send(data);
                }).catch(e => {
                    res.status(400).send(e)
                });
        },
        salvaConta(req, res){
            var conta = new Conta();
            conta.usuario = req.body.usuario;
            conta.nrBanco = req.body.nrBanco;
            conta.nrAgencia = req.body.nrAgencia;
            conta.nrConta = req.body.nrConta;
            conta.vlSaldo = req.body.vlSaldo;

            conta.save()
            .then(x => { 
                res.status(201).send({
                    message: 'Conta cadastrada com sucesso!'});
            }).catch(e => {
                res.status(400).send({
                    message: 'Falha ao criar conta!',
                    data: e
                });
            });
        },
        salvaFavorecido(req, res) {
            Conta.findOne({ usuario: req.userId })
                .then(data => {
                    var favorecidos = data.favorecidos;

                    if(favorecidos!=null) {
                        var checkFavorecido = favorecidos.find(item => 
                            item.agencia == req.body.agencia &&
                            item.conta == req.body.conta
                        );
                    }

                    if(checkFavorecido) {
                        res.status(500).send({success:false, erro:'Favorecido já existente'});
                    } else {
                        Conta.findOneAndUpdate({ usuario: req.userId }, {
                            $push: {
                                favorecidos: req.body
                            }
                            }).then(data => {
                                res.status(200).send({success: true});
                            }).catch(e => {
                                res.status(400).send(e)
                            });
                    }
                }).catch(e => {
                    res.status(400).send(e)
                });
        },
        deletarFavorecido(req, res){
            Conta.findOneAndUpdate({ usuario: req.userId },
                { $pull: { favorecidos: req.body }
                }).then(data => {
                    res.status(200).send({success: true});
                }).catch(e => {
                    res.status(400).send(e)
                });
        },
        getExtrato(req, res) {
           /*  Transacao
                .find({})
                .then(data => {
                    res.status(200).send(data);
                }).catch(e => {
                    res.status(400).send(e)
                }); */
        },
        postExtrato(req, res) {
     /* var transacao = new Transacao();
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
        },
    };
    return contaService;
};