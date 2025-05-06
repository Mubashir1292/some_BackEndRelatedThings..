// ! process is everywhere
// ? argv property
console.log(process.argv);

// ! process env
console.log(process.env.logonserver)
console.log(process.pid);
console.log(process.cwd())
console.log(process.title);
console.log(process.memoryUsage());
console.log(process.uptime())
process.on("exit",()=>{
    console.log("process is exiting...");
})
process.exit(0);
console.log("process exit before")