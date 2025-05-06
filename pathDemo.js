//! path.js will find all the base paths of the files
import url from 'url';
import path from 'path';
const filePath = './some/where/test.txt';
// console.log(path.basename(filePath));
// directory name
const dirname=path.dirname(filePath);
//extension name
const extname=path.extname(filePath);
// complete details of file
const parsename=path.parse(filePath);
// console.log(dirname);
// console.log(extname);
// console.log(parsename);

const __pathname=url.fileURLToPath(import.meta.url);
const __dirname=path.dirname(__pathname);
// console.log(__dirname);
// join method ..
//? in mac and linux there is / is used for filing.....
//? rather then this in windows \ is used for filing...
const filePath2 = path.join(__dirname,"dir1","dir2","test.txt");
// console.log(filePath2);
// resolve
const filePath3 = path.resolve(__dirname,"dir1","dir2","test.txt");
console.log(filePath3);