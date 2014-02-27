/**
 *
 *  HTML5 Examples Web Server
 *
**/

var http    = require('http');
var content = require('node-static');
var port    = 8010;

var file = new(content.Server)('./public');

var handler = function(request, response) { 
    file.serve(request, response, function (err, res) { 
        if (err) { 
            console.error("* problem serving " + request.url + " - " + err.message);
            response.writeHead(err.status, err.headers);
            response.end();
        }
        else {
            console.log("- " + request.url + " - " + res.message);
        }
    });
};

http.createServer(handler)
    .listen(port);

console.log("Server running on http://localhost:" + port);
