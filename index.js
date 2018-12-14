const http = require('http');


const PORT = 80;

function requestHandler(req, res) {
    res.end(`Hello, ${process.platform}`);
}

const server = http.createServer(requestHandler);

server.listen(PORT, () => console.log(`${process.env.NODE_ENV} server listening on port: ${PORT}.`));