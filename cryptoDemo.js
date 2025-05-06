//! working with the crypto for Encryption and Decryption
import crypto from 'crypto';
const hash=crypto.createHash("sha256");
//? this sha256 is algorithm...
hash.update('password');
console.log(hash.digest("hex"));
crypto.randomBytes(16,(err,buf)=>{
    if(err) throw err;
    console.log(buf.toString('hex'));
})