const http = require('http');
const url = require('url');
const fs = require('fs');
const port = process.env | 8000;


const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
// const dataObj = JSON.parse(data);


const server = http.createServer((req, res) => {
    // get path name
    const pathName = req.url;

    if(pathName === '/') {
        res.end('This is home page');
    } else if(pathName === '/overview') {
        res.end('This is overview page');
    } else if(pathName === '/api') {
            res.writeHead(200, { 'Content-type' : 'application/json' });
            res.end(data);
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello world'
        });
        res.end('<h1>Page not found!</h1>');
    }

});

server.listen(port, () => {
    console.log(`listening on port ${port}`);
});