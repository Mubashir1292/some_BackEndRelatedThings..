import fs from 'fs';
fs.readFile('./test.txt','utf-8',(error,data)=>{
    if(error) throw error;
    console.log(data);
});
const data=fs.readFileSync('./test.txt','utf-8')
console.log(data);