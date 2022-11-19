var express = require('express')
var WsApp = require('./ws')

var app = express()

var wsList = new Array();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/ws.html');
})


var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

WsApp(server , '');

app.get('/create' , function (req, res) {
  // const {uid} = req.body;
  WsApp(server , '321');
  res.send({error:0})
})

// wsList.push(WsApp(server));

// WsApp(server);
