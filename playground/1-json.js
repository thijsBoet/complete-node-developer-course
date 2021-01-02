const fs = require("fs");

// const book = {
//   title: "Eloquent Javascript",
//   author: "Marijn Haverbeke",
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataString = dataBuffer.toString();
// const dataJSON = JSON.parse(dataString);

// console.log(dataJSON.title);

// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author);

const buffer = fs.readFileSync('1-user.json');
const dataJSON = buffer.toString();
const user = JSON.parse(dataJSON);

user.name = "Matthijs Boet";
user.age = 39;
user.planet = 'MARS'

const newUser = JSON.stringify(user);
fs.writeFileSync('1-user.json', newUser)