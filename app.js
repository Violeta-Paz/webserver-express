
const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'conten-type': 'aplication/json' });

    let salida = {
        nombre: 'violeta',
        edad: 17,
        url: req.url

    }
    res.write(JSON.stringify(salida));
    //res.write('hola mundo');
    res.end();


})
    .listen(8080);

console.log('escuchando en el puerto 8080');


