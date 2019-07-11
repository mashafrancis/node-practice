const fs = require('fs');
// const book = {
//   title: 'The Enemy',
//   author: 'Masha Francis'
// };
//
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);
// console.log(bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.title);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = 'Stephen';
user.age = 30;

const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJSON);
