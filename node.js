const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, {'content-type': 'text/html'});
    const html = fs.readFileSync('./assi1.html');
    res.end(html);
}).listen(4000,()=>{
    console.log('Server running at 4000');
})
