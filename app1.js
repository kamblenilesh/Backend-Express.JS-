// Creating a node server
const http = require('http');

const server = http.createServer((req, res) => {
    // req.url -> url of site   ex. test
    // req.method -> method of site   ex. GET
    // req.headers -> ex. host, connection
    console.log(req.url, req.method, req.headers);

    // Set response
    // 1. When url = /home, return response ==> Welcome home
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Home Page</title></head>");
    res.write("<body><h1>Welcome home</h1></body>");
    res.write("</html>");
    res.end();
});

server.listen(4000);


// To Run -> open browser 
// type localhost:4000/test  <-

// process.exit() is basically hard exit our EventLoop. Therefore program shutdown and control back to terminal.