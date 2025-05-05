//! this file is just creating the server with es6 snipps like the advance concepts..
console.log("server 2 file is created and now mentioned..");
//! logger is just a middleware for add explain more about the url,path,method of the request..
//? importing the server from http
const port = process.env.port;
import {createServer} from 'http'
const users=[
    {id:1,name:'john doe'},
    {id:2,name:'jine doe'},
    {id:3,name:'jin doen'},
]
//? logger middleware..

const logger=(req,res,next)=>{
    console.log(`${req.url}:${req.method}`);
    
    next();
}
// ! Now I would replace the application/json type with the jsonMiddleware
const jsonMiddleware=(req,res,next)=>{
    res.setHeader("Content-Type","application/json");
    next();
}
const getUsersHandler=(req,res)=>{
    res.write(JSON.stringify(users));
    res.end();
}
const getUserByIdHandler=(req,res)=>{
    const id=req.url.split('/')[3];
    const user= users.find(u=>u.id===parseInt(id));
    if(user){
        res.statusCode='200';
        res.write(JSON.stringify(user));
        res.end();
    }else{
        jsonMiddleware();
        res.statusCode='404',
        res.write(JSON.stringify({message:"Not found"}));
        res.end();
    }
}

const Server = createServer((req,res)=>{
    logger(req,res,()=>{
        if(req.url==='/api/users' && req.method==="GET"){
            res.setHeader("Content-Type","application/json");
            res.statusCode='200';
            res.write(JSON.stringify(users));
            res.end();
        }else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method==="GET"){
            const id=req.url.split('/')[3];
            const user = users.find((u)=>u.id===parseInt(id));
            if(user){
                res.statusCode='200';
                res.write(JSON.stringify(user));
                res.end();
            }else{
                jsonMiddleware();
                res.statusCode='404',
                res.write(JSON.stringify({message:"Not found"}));
                res.end();
            }
        }
        else{
            jsonMiddleware();
            res.statusCode='404';
            res.write(JSON.stringify({message:'Something went wrong'}));
            res.end();
        }
    })
});
Server.listen(port,()=>{
    console.log("Server is listening...");
})