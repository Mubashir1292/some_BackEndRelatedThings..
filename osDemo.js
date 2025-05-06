//! os for setting up the operating system and getting..
import os from 'os';
const userInfo = os.userInfo();
// console.log(userInfo);
// ! total memory
const totalmem=os.totalmem();
console.log(totalmem);
//! free memory
const freemem=os.freemem();
console.log(freemem);
//! cpus
const cpus=os.cpus();
console.log(cpus);