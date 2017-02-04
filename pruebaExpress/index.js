/**
 * Created by Wence on 4/2/17.
 */

var express = require('express');

// Crear una app de express

var app = express();

// Escuchar peticiones en la raiz de nuestro sitito "/"

app.get('/', function (req, res){
    console.log('Petición');
    // Vamos a responder las peticiones
    res.send('Hola');

});

var server = app.listen(3000, function(){
    var port = server.address().port;
   console.log('Servidor Express Arrancado en el puerto '+ port);
});