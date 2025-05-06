import { webcrypto } from 'crypto'
import fs from 'fs/promises'
// import fs from 'fs';
// fs.readFile('./test.txt','utf-8',(error,data)=>{
//     if(error) throw error;
//     console.log(data);
// });
// const data=fs.readFileSync('./test.txt','utf-8')
// console.log(data);
// fs.readfileAsync('./test.txt','utf-8')
// .then((data)=>console.log(data))
// .catch(error=>console.log(error));

fs.readFile('./test.txt','utf-8').then(data=>console.log(data)).catch(error=>console.error(error));
const readfile=async()=>{
    try{
        const data = await fs.readFile('./test.txt','utf-8');
        console.log(data);
    }catch(error){
        console.log(error)
    }
}

//writing into the files....
const writeIntoFile=async()=>{
    try{
        await fs.writeFile('./test.txt',"I am writing into this file....");
        console.log("data written into this file....");
    }catch(error){
        console.log(error);
    }
}
//apend into the file
const appendIntoFile=async()=>{
    try{
        await fs.appendFile('./test.txt','I am appending this data onto the test file');
        console.log("data append");
    }catch(error){
        console.log(error);
    }
}



writeIntoFile();
appendIntoFile();
readfile();
