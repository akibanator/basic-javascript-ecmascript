const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req,res) {
    fs.readFile('style.css', function(error, data) {
        res.writeHead(200, { 'Content-Type': 'text/css' })
        if (error) {
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.write(data)
        }
        res.end
    })
    fs.readFile('script.js', function(error, data) {
        res.writeHead(200, { 'Content-Type': 'text/javascript' })
        if (error) {
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.write(data)
        }
        res.end
    }) 
    fs.readFile('modelo.html', function(error, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        if (error) {
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.write(data)
        }
        res.end
    }) 
})

server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong' + error)
    } else {
        console.log('Server is listening on port: ' + port)
    }
})