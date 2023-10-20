// built in

const fs = require("fs");

console.log("Start of file read");
// const f = fs.readFile("test.txt", { encoding: "utf8" }, (err, data) => {
//   if (err) {
//     console.log(`error : ${err}`);
//     return;
//   }
//   console.log("Data", data);
// }); //error first-oor ajillana

// const data = fs.readFileSync("test.txt", { encoding: "utf-8" });
// console.log(data);

// fs.writeFile("test.txt", "hello pinecone fs writer", (err) => {
//   if (err) {
//     console.log("write ERR", err);
//   }
//   console.log("write Successfull");
// });
// fs.appendFile("test.txt", " hello pinecone fs writer", (err) => {
//   if (err) {
//     console.log("write ERR", err);
//   }
//   console.log("write Successfull");
// });

fs.readFile("test.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log(`error : ${err}`);
    return;
  }
  console.log("Count Numbers:", data.length);
  const parsedData = data.split(" ");
  console.log("Count words Numbers:", parsedData.length);
  //   console.log("parsedNumbers:", parsedData);
  const count = parsedData.reduce((prev, cur) => prev + cur.length, 0);
  console.log("string usgiin too: ", count);
  const arr = [1, 2, 4, 5, 6];
  // reduce ehleed UMNUH UTGAA ugdug daraa ni ELEMENT- odoo bga
  const sum = arr.reduce((prev, cur) => prev + cur, 0);
  console.log("reduce:", sum);
});

console.log("end of read file");


//gert: 