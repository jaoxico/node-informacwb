var lo = require('lodash');

function Status(statusSolicitado) {
    var grupos = [
        {
            id: 0,
            msg: 'Mensagem aceita.'
        },
        {
            id: 1,
            msg: 'Mensagem pendente.'
        },
        {
            id: 2,
            msg: 'Impossível entregar a mensagem.'
        },
        {
            id: 3,
            msg: 'Mensagem entregue.'
        },
        {
            id: 4,
            msg: 'Mensagem expirada.'
        },
        {
            id: 5,
            msg: 'Mensagem rejeitada.'
        }
    ];
    var status = [
        {
            id: 1,
            gId: 1,
            msg: 'Violação no tempo de janela.'
        },
        {
            id: 2,
            gId: 3,
            msg: 'Mensagem entregue à operadora.'
        },
        {
            id: 3,
            gId: 1,
            msg: 'Mensagem enviada, aguardando resposta de entrega.'
        },
        {
            id: 4,
            gId: 2,
            msg: 'Mensagem rejeitada pela operadora.'
        },
        {
            id: 5,
            gId: 3,
            msg: 'Mensagem entregue ao destinatário.'
        },
        {
            id: 6,
            gId: 5,
            msg: 'Rede não permitida.'
        },
        {
            id: 7,
            gId: 1,
            msg: 'Mensagem enviada por outra rota.'
        },
        {
            id: 8,
            gId: 5,
            msg: 'Faltando o número do prefixo.'
        },
        {
            id: 9,
            gId: 2,
            msg: 'Mensagem enviada mas não entregue.'
        },
        {
            id: 10,
            gId: 5,
            msg: 'Destinatário na lista de não perturbe.'
        },
        {
            id: 11,
            gId: 5,
            msg: 'Invalid source address.'
        },
        {
            id: 12,
            gId: 5,
            msg: 'Rejeitada por falta de créditos.'
        },
        {
            id: 13,
            gId: 5,
            msg: 'Rejeitada pelo remetente.'
        },
        {
            id: 14,
            gId: 5,
            msg: 'Rejeitada pelo destinatário.'
        },
        {
            id: 15,
            gId: 4,
            msg: 'Mensagem expirada.'
        },
        {
            id: 16,
            gId: 5,
            msg: 'Rede inalcançável.'
        },
        {
            id: 17,
            gId: 5,
            msg: 'Pacote pré-pago expirado.'
        },
        {
            id: 18,
            gId: 5,
            msg: 'Destinatário não registrado.'
        },
        {
            id: 19,
            gId: 5,
            msg: 'Rota não disponível.'
        },
        {
            id: 20,
            gId: 5,
            msg: 'Rejeitada flooding.'
        },
        {
            id: 21,
            gId: 5,
            msg: 'Rejeitada erro no sistema.'
        },
        {
            id: 22,
            gId: 4,
            msg: 'Rejeitada por razão desconhecida.'
        },
        {
            id: 23,
            gId: 5,
            msg: 'Rejeitada ID da mensagem duplicado.'
        },
        {
            id: 24,
            gId: 5,
            msg: 'Rejeitada UHD inválido.'
        },
        {
            id: 25,
            gId: 5,
            msg: 'Rejeitada mensagem muito grande.'
        },
        {
            id: 26,
            gId: 1,
            msg: 'Pendente de aceitação.'
        },
        {
            id: 27,
            gId: 1,
            msg: 'Pendente de aprovação.'
        },
        {
            id: 28,
            gId: 5,
            msg: 'Rejeitada não enviada.'
        },
        {
            id: 29,
            gId: 4,
            msg: 'Expirada DLR desconhecido.'
        },
        {
            id: 30,
            gId: 2,
            msg: 'Entregue.'
        }
    ];
    this.status = null;
    var s;
    for (s = 0; s < status.length; s++) {
        var statusAtual = status[s];
        if (statusSolicitado.groupId === statusAtual.gId && statusSolicitado.id === statusAtual.id) {
            this.status = statusAtual;
            break;
        }
    }
    if (this.status === null) {
        for (s = 0; s < grupos.length; s++) {
            var gr = grupos[s];
            if (statusSolicitado.grupoId === gr.id) {
                this.status = gr;
                break;
            }
        }
    }
}

Status.prototype.getMensagem = function() {
    return this.status.msg;
};

module.exports = Status;
