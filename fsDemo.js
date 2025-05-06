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
readfile();