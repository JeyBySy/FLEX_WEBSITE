const http = require('http')
const fs = require('fs')
const port = 3000
const path = require('path')

const server = http.createServer(function (req, res) {
    if (req.url === "/") {                              //RUNNING THE index.html OR THE MAIN FILE
        fs.readFile('index.html', function (error, data) {
            res.writeHead(200, { 'Content-type': 'text/html' })
            res.write(data);
            res.end();
        });
    } else if (req.url.match("\.html$")) {               //GETTING THE HTML FILE
        var html_file = path.join(__dirname, req.url);
        var filestream = fs.createReadStream(html_file);
        res.writeHead(200, { 'Content-type': 'text/html' });
        filestream.pipe(res)
    }
    else if (req.url.match("\.css$")) {                 //GETTING THE CSS FILE
        var css_file = path.join(__dirname, req.url);
        var filestream = fs.createReadStream(css_file);
        res.writeHead(200, { 'Content-type': 'text/css' });
        filestream.pipe(res)
    } else if (req.url.match("\.js$")) {                 //GETTING THE JS FILE
        var js_file = path.join(__dirname, req.url);
        var filestream = fs.createReadStream(js_file);
        res.writeHead(200, { 'Content-type': 'text/js' });
        filestream.pipe(res)
    } else if (req.url.match("\.jpg$")) {                 //GETTING THE PICTURE FILE
        var pic_file = path.join(__dirname, req.url);
        var filestream = fs.createReadStream(pic_file);
        res.writeHead(200, { 'Content-type': 'image/jpg' });
        filestream.pipe(res)
    } else {
        res.writeHead(404)
        res.write("Error file")
        res.end()
    }
})

server.listen(port, function (error) {
    if (error) {
        console.log("Error", error)
    } else {
        console.log("Success", +port)
    }
})

