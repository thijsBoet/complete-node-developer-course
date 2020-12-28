const validator = require("validator");
const chalk = require("chalk");

const getNotes = require("./notes");

console.log(getNotes())
console.log(validator.isEmail("m.boet@chello.nl"));
console.log(chalk.green.bold("SUCCES"));
console.log(chalk.white.bgRed.bold.inverse("ftps://www.hello.nl"));

// const fs = require("fs");
// const os = require("os");

// fs.writeFileSync("notes.txt", "This file was created by NodeJS!");
// fs.appendFileSync("notes.txt", "\nThis part was appended using appendFile!");

// const arch = os.arch();
// const cpu = os.cpus();
// const version = os.version();

// fs.appendFileSync(
//   "notes.txt",
//   `\nYour computer is running a ${cpu[1].model} with ${arch} architecture!`
// );
// fs.appendFileSync("notes.txt", `\nOn a  ${version} machine`);
