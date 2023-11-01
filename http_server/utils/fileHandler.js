const fs = require("fs");
const path = require("path");

const pa = path.join(__dirname, "../data/");
// console.log("PATH", path);

const readFile = (fileName) => {
  try {
    const { data } = JSON.parse(
      fs.readFileSync(pa + fileName, {
        encoding: "utf-8",
      })
    );
    console.log("DATA", data);
    console.log("fileName", fileName);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const writeFile = (fileName, data) => {
  fs.writeFileSync(pa + fileName, JSON.stringify({ data }), {
    encoding: "utf-8",
  });
};

module.exports = { readFile, writeFile };
