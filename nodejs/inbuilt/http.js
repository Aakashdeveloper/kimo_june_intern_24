let http = require('http');

//req > what we send to server (params,query params, body)
//res > what we get from server

let server = http.createServer((req,res)=>{
    res.write("hii from node code server")
    res.end()
})

server.listen(8766)