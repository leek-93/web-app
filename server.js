const express = require('express');
const app = express();

app. listen(8080, function(){
    console.log('open');
});

app.get('/', function(request, response){
    response.sendFile(__dirname+'/index.html');
});

app.post('/', function(request, response){
    response.send('post request');
});

app.put('/', function(request, response){
    response.send('put request');
});

app.delete('/', function(request, response){
    response.send('delete request');
});