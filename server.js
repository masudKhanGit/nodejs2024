const http = require('http');
const port = process.env | 8000;

const server = http.createServer((req, res) => {
    res.end('hello from the server');
});

server.listen(port, () => {
    console.log(`listening on port ${port}`);
});