const http= require('http');
const routes = require('./routes');;

const server = http.createServer(routes);

// if we use second methhod of module,export
//const server = http.createServer(routes.handler);
server.listen(3000);
