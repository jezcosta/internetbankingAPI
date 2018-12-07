module.exports = (app) => {
    const { Transacao } = app.models;
    const { Favorecido } = app.models;
    const { Conta } = app.models;
    
    const contaService = {
        getInformacoesConta(req, res) {
            /* Conta
            .find({})
            .then(data => {
                res.status(200).send(data);
            }).catch(e => {
                res.status(400).send(e)
            }); */
        },

        salvaConta(req, res){
          /*   var conta = new Conta();
            conta.usuario = req.body.usuario;
            conta.nrBanco = req.body.nrBanco;
            conta.nrAgencia = req.body.nrAgencia;
            conta.nrConta = req.body.nrConta;
            conta.vlSaldo = req.body.vlSaldo;

            conta
            .save()
            .then(x => { 
                res.status(201).send({
                    message: 'Conta cadastrada com sucesso!'});
            }).catch(e => {
                res.status(400).send({
                    message: 'Falha ao criar conta!',
                    data: e
                });
            }); */
        },

        getFavorecidos(req, res) {
            /* Favorecido
                .find({})
                .then(data => {
                    res.status(200).send(data);
                }).catch(e => {
                    res.status(400).send(e)
                });    */        
        },
        salvaFavorecido(req, res) {
              /*  var favorecido = new Favorecido();
                favorecido.nmFavorecido = req.body.nmFavorecido;
                favorecido.sobrenomeFavorecido = req.body.sobrenomeFavorecido;
                favorecido.nrBanco = req.body.nrBanco;
                favorecido.nrAgencia = req.body.nrAgencia;
                favorecido.nrConta = req.body.nrConta;  
                favorecido.nrCPF = req.body.nrCPF
                favorecido.dsEmail = req.body.dsEmail

                favorecido
                .save()
                .then(x => { 
                    res.status(201).send({
                        message: 'Favorecido cadastrado com sucesso!'});
                }).catch(e => {
                    res.status(400).send({
                        message: 'Falha ao cadastrar o favorecido!',
                        data: e
                }); */
        },

        atualizarFavorecido(){
           /*  Favorecido
            .findByIdAndUpdate(req.params.id, { 
                $set: {
                    nmFavorecido: req.body.nmFavorecido, 
                    sobrenomeFavorecido: req.body.sobrenomeFavorecido, 
                    nrBanco: req.body.nrBanco, 
                    nrAgencia: req.body.nrAgencia, 
                    nrConta: req.body.nrConta, 
                    nrCPF: req.body.nrCPF, 
                    dsEmail: req.body.dsEmail
            }
        }).then(x => {
            res.status(200).send({
                message: 'Favorecido atualizado com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar Favorecido',
                data: e
            });
        }); */
        },

        deletarFavorecido(){
      /*       Favorecido
        .findOneAndRemove(req.params.id)
        .then(x => {
            res.status(200).send({
                message: 'Favorecido removido com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao remover Favorecido',
                data: e
            });
        }); */
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