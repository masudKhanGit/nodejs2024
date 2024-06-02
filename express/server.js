const http = require('http');
const url = require('url');
const port = process.env | 8000;

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if(pathName === '/') {
        res.end("sever"); 
    }
})

server.listen(port, () => console.log(`Server running on port ${port}`))