const fs = require('fs');

// Blocking synchronous way
// const readText = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(readText);

// const writeText = `this is write text here. ${readText}.\nCreated On ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', writeText);
// console.log('File Written!');

// Non-Blocking Asynchronous way
fs.readFile('./txt/start.txt', 'utf-8' , (err, data1) => {
    if (err) return console.log('Error')
        
    fs.readFile(`./txt/read-this.txt`, 'utf-8' , (err, data2) => {
        console.log(data2);
        fs.readFile(`./txt/append.txt`, 'utf-8' , (err, data3) => {
            console.log(data3);

            fs.writeFile('./txt/final.txt', `${data2}\n${data3}` , 'utf-8' , err => {
                console.log('your final has been written');
            });
        });
    });
});
console.log('read it.');