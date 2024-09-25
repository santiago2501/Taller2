var http = require('http');

// Crear el servidor
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });  // Cabecera de la respuesta
    res.end('Hello World!');  // Respuesta al cliente
}).listen(8080);  // El servidor escucha en el puerto 8080

console.log('Server running at http://localhost:8080/');