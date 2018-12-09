module.exports = (app) => {
    const { Conta, transacao } = app.models;
    const { logs, retorno } = app.middlewares;
    const mongoose = require('mongoose');
    const Fawn = require("fawn");
    Fawn.init(mongoose);
    
    const transacaoService = {
        async transferir(req, res) {
            const { contaOrigem, agenciaOrigem, contaDestino, agenciaDestino, valor, observacao } = req.body;
            const task = Fawn.Task();
            var dadosContaOrigem, dadosContaDestino;
            var saldoSuficiente = true;

            await Conta.findOne({ nrConta: contaOrigem, nrAgencia: agenciaOrigem })
                .then((dados) => {
                    if(dados) {
                        dadosContaOrigem = dados;
                        if((dadosContaOrigem.vlSaldo - valor) < 0) {
                            saldoSuficiente = false;
                            retorno.envia(res,400,false,'','Saldo insuficiente',null);
                        }
                    }
                })
                .catch(function(erro){
                    retorno.envia(res,400,false,erro,'Erro ao procurar conta origem',null);
                });
            
            if(saldoSuficiente) {
                await Conta.findOne({ nrConta: contaDestino, nrAgencia: agenciaDestino })
                    .then((dados) => {
                        dadosContaDestino = dados;
                    })
                    .catch(function(erro){
                        retorno.envia(res,400,false,erro,'Erro ao procurar conta destino',null);
                    });

                if(dadosContaOrigem && dadosContaDestino) {

                    const historicoOrigem = new transacao({
                        tpTransacao: "debito",
                        vlTransacao: valor,
                        contaRef: contaDestino,
                        agenciaRef: agenciaDestino,
                        observacao: observacao,
                        vlAnterior: dadosContaOrigem.vlSaldo,
                        vlAtual: dadosContaOrigem.vlSaldo - valor 
                    });

                    const historicoDestino = new transacao({
                        tpTransacao: "credito",
                        vlTransacao: valor,
                        contaRef: contaOrigem,
                        agenciaRef: agenciaOrigem,
                        observacao: observacao,
                        vlAnterior: dadosContaDestino.vlSaldo,
                        vlAtual: dadosContaDestino.vlSaldo + valor 
                    });

                    task.update("Conta", { nrConta: contaOrigem, nrAgencia: agenciaOrigem }, {$inc: {vlSaldo: -valor}, $push: {transacoes: historicoOrigem}})
                        .update("Conta", { nrConta: contaDestino, nrAgencia: agenciaDestino }, {$inc: {vlSaldo: valor}, $push: {transacoes: historicoDestino}})
                        .run({ useMongoose: true })
                        .then(function(results){
                            retorno.envia(res,200,true,null,'Transferência Realizada com Sucesso',null);
                        })
                        .catch(function(erro){
                            //rollback
                            logs.log('error', erro);
                            retorno.envia(res,400,false,erro,'Erro ao realizar transação',null);
                        });
                } else {
                    logs.log('error', `"${req.method} ${req.url}" contas: ${contaOrigem}-${agenciaOrigem} / ${contaDestino}-${agenciaDestino} 400 (erro: Conta não encontrada)`);
                    retorno.envia(res,400,false,null,'Conta não encontrada',null);
                }
            }

        }
    };
    return transacaoService;
};