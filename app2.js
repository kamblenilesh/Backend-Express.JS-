// Creating a node server
const http = require('http');

// Creating file
const fs = require('fs');

const server = http.createServer((req, res) => {
    // variable
    const url = req.url;
    const method = req.method;

    // only run when '/'
    if (url === '/') {

        // read file from source
        fs.readFile('message.txt', { encoding: 'utf-8' }, (err, data) => {

            if (err) {
                console.log(err);
            }
 
            console.log('Data from File: ' + data); // show data in console
            // html code
            res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
            res.write(`<body>${data}</body>`); // show data on screen
            // created form which content text button, and POST request
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
            res.write('</html>');
            return res.end(); // return from block
        });
    }

    else if (url === '/message' && method === 'POST') {
        const body = [];  // var.

        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);  // push chunk in array
        });


        return req.on('end', () => {
            // To concat body content message in form of string
            const parsedBody = Buffer.concat(body).toString(); // Buffer class use
            // don't message key we use split
            const message = parsedBody.split('=')[1];
            // Creating file of name message 
            fs.writeFile('message.txt', message, (err) => {
                console.log(fs.writeFile);
                // Set statusCode as 302
                res.statusCode = 302;
                // Location of file to store
                res.setHeader('Location', '/');
                // return from block
                return res.end();
            });
        });
    }

    else {
        // This is all HTML code
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<body><h1>Welcome home</h1></body>');
        res.write('</html>');
        res.end();
    }
});

server.listen(4000);


// To Run -> open browser
// type localhost:4000  <-