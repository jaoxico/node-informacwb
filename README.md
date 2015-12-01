# node-informacwb

### Como instalar

npm install node-informacwb

### Como Usar

```javascript
var informacwb = require('node-informacwb');
```

### Enviar mensagem

```javascript
var SMS = new informacwb('usuario', 'senha');

SMS.send('sender',['telefone do destinatário'],'Mensagem a ser enviada.',function(err,result){
    if (err){
        return console.log(err);
    }

    console.log(result);
});
```

