const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    // solution 1
    // fs.readFile(`${__dirname}/txt/final.txt`, (err, data) => {
    //     if (err) console.log(err);
    //     res.end(data);
    // })

    // solution 2 streams
    // const readAble = fs.createReadStream(`${__dirname}/txt/final.txt`);
    // readAble.on('data', chunk => {
    //     res.write(chunk);
    // })
    // readAble.on('end', () => res.end());

    // readAble.on('end', () => res.end());

    // readAble.on('error', (err) => {
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end('File not found');
    // })

    // soluation 3
    const readAble = fs.createReadStream(`${__dirname}/txt/final.txt`);
    readAble.pipe(res);
    // readableSource.pipe(writeableDest);

});

server.listen(3000, () => console.log('listening on port 3000'));