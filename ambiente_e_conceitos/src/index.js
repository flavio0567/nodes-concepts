const express = require('express');
const server = express();
const routes = './routes';


server.use(express.json());

require('./users');

// server.use((req, res, next) => {
//   console.time('Request!');
//   console.log(`Metodo: ${req.method}; URL: ${req.url}`);
//   next();
//   console.timeEnd('Request!');

// });

server.use(routes);



server.listen(3000);
