// Creating a node server
const http = require('http');

// importing routes    & local path
const routes = require('./routes');

// const server = http.createServer(routes);

// 2. using object
// console.log(routes.someText);
// const server = http.createServer(routes.handler);

// 3. different way for all import  & 4. shortcut
console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(4000);


// To Run -> open browser
// type localhost:4000  <-