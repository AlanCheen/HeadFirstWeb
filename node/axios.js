var http = require('http');
var cprocess = require('child_process');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Headers", "content-type");
    // res.setHeader("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    // res.setHeader('Content-Type', 'text/plain');s

    res.statusCode = 200;

    const result = [
        {
            name: 'a',
            age: 1
        },
        {
            name: 'b',
            age: 2
        }, {
            name: 'c',
            age: 3
        },
    ]
    res.end(JSON.stringify(result));
})

server.listen(port, hostname, () => {
    console.log('server running at http://%s:%s', hostname, port);
    const url = `http://${hostname}:${port}`;
    cprocess.exec(`open ${url}`);
})