# node-informacwb

### Como instalar

npm install node-informacwb

### Como Usar

```javascript
var informacwb = require('node-informacwb');
```

#### Iniciando a conexão com a informacwb

```javascript
var SMS = new informacwb('usuario', 'senha');
```

#### Enviar uma mensagem para um ou mais destinatários

```javascript
SMS.send('remetente', destinatarios,'Mensagem a ser enviada.',function(err,result){
    if (err){
        return console.log(err);
    }

    console.log(result);
});
```

Os destinatários podem ser um array de telefones que receberão a mensagem.
Caso a mensagem esteja sendo enviada para apenas um destinatário, este pode ser informado em uma stringsimples ao invés de um array.

#### Obter o status de mensagen(s)
 
##### Método getLogs([filtro,] callback);

O parãmetro filtro é opcional e caso seja informado deve ser um objeto.

Veja abaixo a tabela de informações que podem ser passadas no filtro:

Dado | Tipo | Descrição
---- | ---- | ---------
from | string | Remetente.
to | string | Destinatário.
bulkId | string|array | O(s) bulkId que identifica(m) um ou mais grupo(s) de mensagens.
messageId | string|array | Um ou mais ids de mensagens.
generalStatus | string | Status da mensagem
sentSince | date | Mensagens enviadas a partir de.
sentUntil | date | Mensagens enviadas até.
limit | int | Número máximo de mensagens no retorno
mcc | string | Código do país.
mnc | string | Código da operadora.