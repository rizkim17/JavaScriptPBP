//Operating System
const os = require("os");

console.log(`${os.hostname}`);
console.log(`${os.platform}`);

//File system
const fs = require("fs");
console.log(fs.readFileSync("session_5/data.txt", "utf8"));
