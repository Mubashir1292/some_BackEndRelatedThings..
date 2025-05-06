import url, { URLSearchParams } from 'url';
const urlString='https://www.youtube.com/search?q=hello+world';
const urlObj=new URL(urlString);
console.log(urlObj);
// Anyone can find out the properties of any url by passing it to the URL function..
// formate 
// ? this format will take the object and returns back the string
console.log(url.format(urlObj));
console.log(url.fileURLToPath(import.meta.url));
// ! getting the query params
const params=new URLSearchParams(urlObj.search);
params.append("limit","5");
params.delete("limit");
console.log(params);