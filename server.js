import http from 'http';
const port=process.env.PORT;
const server = http.createServer((req,res)=>{
    // res.setHeader("Content_Type","text/html");
    // res.statusCode('404');
    const url=req.url;
    const method=req.method;
    console.log(url,method);
    res.writeHead(200,{"content-type":"text/html"})
    res.end("<h1>Server is on and able to write...</h1>");
});
server.listen(port,()=>{
    console.log("server started");
})