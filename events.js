import {EventEmitter} from 'events';
const myEmitter = new EventEmitter();

const greetHandler=(name)=>{
    console.log(`Hy...${name} From my side...`);
}
const goodByHandler=(name)=>{
    console.log(`good-bye ${name} from my side...`);
}
myEmitter.on("greet",greetHandler);
myEmitter.on("goodBye",goodByHandler);
myEmitter.emit("greet","someone");
myEmitter.emit("goodBye","someone");

myEmitter.on("err",(err)=>{
    console.log("Here's the error"+err);
})
myEmitter.emit('err',new Error("An Error Occured"));