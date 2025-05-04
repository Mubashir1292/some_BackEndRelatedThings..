import http from 'http';
import fs from 'fs/promises'
import url from 'url';
import path from 'path';
const __filename=url.fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const port=process.env.PORT;
const server = http.createServer(async(req,res)=>{
    // res.setHeader("Content_Type","text/html");
    // res.statusCode('404');
    const url=req.url;
    const method=req.method;
    console.log(url);
    let filePath;
    if(url==='/'){
        filePath=path.join(__dirname,"public","index.html");
    }else if(url==='/about'){
        filePath=path.join(__dirname,"public","about.html");
    }else if(url==='/contact' && method==="POST"){
        res.end("<h1>You chooose the contact link and method is post</h1>")
    }else{
        throw new Error("Not found");
    }
    const data=await fs.readFile(filePath,'utf-8');
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(data);
    // res.writeHead(200,{"content-type":"text/html"})
    // res.end("<h1>Server is on and able to write...</h1>");
});
server.listen(port,()=>{
    console.log("server started");
});