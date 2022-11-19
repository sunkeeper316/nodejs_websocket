var WebSocketServer = require('ws').Server

var id = 1;

function WsApp(server , path) {

  // wss = new WebSocketServer({noServer: true});
  wss = new WebSocketServer({server, path: `/${path}`})

  wss.on('connection', function (ws) {
    console.log('welcome !');
    ws.uid = id;
    id++ ;
    console.log(ws.uid);
  ws.on('message', function (message) {
    console.log('received: %s', message)

    // wss.clients.forEach((client) => {
    //   client.send(message)
    // });

    try{
      var json = JSON.parse(message);
      if (json.chat == "single"){
        if(json.type == "offer"){
          console.log('get offer');
          var offer = {
            type: 'offer',
            offer: json.offer,
            sender: ws.uid
          }
          
          wss.clients.forEach((client) => {
            // client.send(JSON.stringify(message))
            if (client.uid != ws.uid){
              client.send(JSON.stringify(json))
            }
            
          });
        }else if (json.type == "answer"){
          console.log('get answer');
          wss.clients.forEach((client) => {
            if (client.uid != ws.uid){
              client.send(JSON.stringify(json))
            }
          });
        }
        // else if (json.type == "candidate"){
        //   wss.clients.forEach((client) => {
        //     client.send(JSON.stringify(json))
        //   });
        // }

      }
    }catch(err){
      console.log(`err : ${err}`);
    }

  })

  // setInterval(
  //   () => ws.send(`${new Date()}`),
  //   1000
  // )

  // setInterval(
  //   function() {
  //     ws.send(`${new Date()}`);
  //     console.log('setInterval ')
  //   },
  //   1000
  // )

  })
  return this;
}

module.exports = WsApp;