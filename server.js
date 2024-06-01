const http = require('http');
const url = require('url');
const port = process.env | 8000;

const server = http.createServer((req, res) => {
    // get path name
    const pathName = req.url;

    if(pathName === '/') {
        res.end('This is home page');
    } else if(pathName === '/overview') {
        res.end('This is overview page');
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