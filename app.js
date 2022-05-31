const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers)
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page </title></head>');
    res.write('<body><h1> Hello I am Node js Server </h1> </body>');
    res.write('</html>')
    res.end();
    // console.log(req);
    // process.exit()
})

server.listen(3000);
