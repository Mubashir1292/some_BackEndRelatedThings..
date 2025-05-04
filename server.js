import http from 'http';
const port=process.env.PORT;
const server = http.createServer((req,res)=>{
    // res.setHeader("Content_Type","text/html");
    // res.statusCode('404');
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        res.writeHead(200,{"content-type":"text/html"})
        res.end("<h1>Just the Get Request...</h1>")
    }else if(url==='/about'){
        res.writeHead(200,{"content-type":"text.html"});
        res.end("<h1>At About Page...</h1>");
    }else if(url==='/contact' && method==="POST"){
        res.end("<h1>You chooose the contact link and method is post</h1>")
    }else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>Not Founded...</h1>")
    }
    console.log(url,method);
    // res.writeHead(200,{"content-type":"text/html"})
    // res.end("<h1>Server is on and able to write...</h1>");
});
server.listen(port,()=>{
    console.log("server started");
})