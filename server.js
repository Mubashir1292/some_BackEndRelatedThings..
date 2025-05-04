import http from 'http';
const server = http.createServer((req,res)=>{
    // res.setHeader("Content_Type","text/html");
    // res.statusCode('404');
    res.writeHead(500,{"content-type":"application/json"})
    res.end("<h1>Server is on and able to write...</h1>");
});
server.listen(3000,()=>{
    console.log("server started");
})