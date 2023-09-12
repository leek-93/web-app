const express = require('express');
const app = express();

app.use(express.static('image'));


app. listen(8080, function(){
    console.log('open');
});

app.get('/', function(request, response){
    response.sendFile(__dirname+'/index.html');
});

app.get('/intro', function(request, response){
    response.sendFile(__dirname+'/intro.html');
});

app.get('/share', function(request, response){
    response.sendFile(__dirname+'/share.html');
});

app.get('/gallary', function(request, response){
    response.sendFile(__dirname+'/gallary.html');
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