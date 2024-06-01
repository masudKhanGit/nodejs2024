const http = require('http');
const url = require('url');
const fs = require('fs');
const port = process.env | 8000;

const replaceTemplate = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName)
    output = temp.replace(/{%IMAGE%}/g, product.image)
    output = temp.replace(/{%FORM%}/g, product.form)
    output = temp.replace(/{%NUTRIENTS%}/g, product.nutrients)
    output = temp.replace(/{%QUANTITY%}/g, product.quantity)
    output = temp.replace(/{%PRICE%}/g, product.price)
    output = temp.replace(/{%ORGANIC%}/g, product.organic)
    output = temp.replace(/{%DESCRIPTION%}/g, product.description)
    output = temp.replace(/{%ID%}/g, product.id)
    return output
}

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);
const tempOverview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8');

const server = http.createServer((req, res) => {
    // get path name
    const pathName = req.url;

        // home page & overview page
    if(pathName === '/' || pathName === '/overview') {
        const cardHtml = dataObj.map(element => replaceTemplate(tempOverview, element));
        console.log(cardHtml);

        res.writeHead(200, { 'Content-type' : 'text/html' });
        res.end(tempOverview);

        // Product page
    } else if(pathName === '/product') {
        res.end('This is product page');

        // API
    } else if(pathName === '/api') {
            res.writeHead(200, { 'Content-type' : 'application/json' });
            res.end(data);

        //Not Found Page 
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