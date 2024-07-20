let http = require('http');

//req > what we send to server (params,query params, body)
//res > what we get from server

let server = http.createServer((req,res)=>{
    res.write("hii from nodejs code server app")
    res.end()
})

server.listen(8766)