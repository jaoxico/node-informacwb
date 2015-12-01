# informacwb

### Como instalar

npm install node-informacwb

### O que é

API para envio de mensagens SMS através da InformaCWB

### Como Usar

```javascript
var informacwb = require('node-informacwb');

var SMS = new informacwb('usuario', 'senha');

SMS.send('sender',['telefone do destinatário'],'Mensagem a ser enviada.',function(err,result){
    if (err){
        return console.log(err);
    }

    console.log(result);
});
...