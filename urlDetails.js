import url from 'url';
const urlString='https://www.youtube.com/watch?v=32M1al-Y6Ag&t=4588s';
const urlObj=new URL(urlString);
console.log(urlObj);
// formate 
// ? this format will take the object and returns back the string
console.log(url.format(urlObj));