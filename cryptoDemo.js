//! working with the crypto for Encryption and Decryption
import crypto, { randomBytes } from 'crypto';
const hash=crypto.createHash('sha256');
hash.update("password");
// console.log(hash.digest("hex"));
// random bytes
crypto.randomBytes(16,(err,buf)=>{
    if(err) throw err;
    // console.log(buf.toString("hex"))
})
// ? createCipheriv & createDecipheriv
const algorithm="aes-256-cbc";
const key=crypto.randomBytes(32);
const iv=crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm,key,iv);
let encrypted = cipher.update("hy","utf-8","hex");
encrypted+=cipher.final("hex");
console.log(encrypted);
const decipher = crypto.createDecipheriv(algorithm,key,iv);
let dataDecrypted = decipher.update(encrypted,"hex","utf-8");
dataDecrypted+=decipher.final("utf-8");
console.log(dataDecrypted);