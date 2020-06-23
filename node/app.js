
// import http from 'http';
var http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', 'null');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式 
    res.setHeader("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    const result = [
        {
            name: 'a',
            age: 1

        }, {
            name: 'b',
            age: 2

        }, {
            name: 'c',
            age: 3
        },
    ];

    res.end(JSON.stringify(result));
})

server.listen(port, hostname, () => {
    console.log('server running at..')
    console.log('server running at http://%s:%s', hostname, port)
})