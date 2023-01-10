const http = require('http');
var randomWords = require('random-words');
console.log(randomWords());
const hostname = 'localhost'
const port = 80;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(randomWords());
});
server.listen(port, () => {
    console.log(`cli-nodejs-api listening at http://localhost:${port}`)
})