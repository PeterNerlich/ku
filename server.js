const jsonServer = require('json-server')
const server = jsonServer.create();
const router = jsonServer.router('local.db.json');
const middlewares = jsonServer.defaults();
var os = require('os');

var interfaces = os.networkInterfaces();
var localAddress = '';
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            if(address.address.startsWith('192.168.178.')) localAddress = address.address;
        }
    }
}

console.info('Folgende URL im Browser öffnen: ',localAddress);

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get('/my-local-ip', (req, res) => {
  res.jsonp( {result: localAddress } );
})

// Use default router
server.use(router)
server.listen(80, () => {
  console.log('JSON Server is running')
})


//const opn = require('opn');
//opn('http://localhost');
