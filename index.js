const jsonServer = require("json-server"); // IMPORTAR EL JSONSERVERrrrrrrrrrrrrr
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; // SE PUEDE USAR CUALQUIER PUERTO

server.use(middlewares);
server.use(router);
server.listen(port);