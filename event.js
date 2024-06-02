const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter {
    constructor() {
        super();
        this.stock = 10;
    }
}

const myEmitter = new Sales();

myEmitter.on('newSale', () => {
    console.log('there was a new sale');
});

myEmitter.on('newSale', () => {
    console.log('customer name: Md. Masud Khan');
});

myEmitter.on('newSale', (stock) => {
    console.log(`there are now ${stock} items left in stock.`);
});

myEmitter.emit('newSale', 9);

//////////////////////
const server = http.createServer()

server.on('request', (req, res) => {
    console.log('request received');
    console.log(req.url);
    res.end('request received');
});

server.on('request', () => {
    console.log('another request received');
});

server.on('close', () => {
    console.log('server closed');
});

server.listen(3000, '127.0.0.1' , () => {
    console.log('waiting for requests');
});