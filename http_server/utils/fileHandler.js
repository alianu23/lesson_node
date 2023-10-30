const fs = require("fs");
const path = require("path");

const p = path.join(__dirname, "../data/");

//relative path | absolute path
const readFile = (fileName) => {
  console.log("PATH", path.join(__dirname, "../data"));
  const { data } = JSON.parse(
    fs.readFileSync(p + fileName, {
      encoding: "utf-8",
    })
  );
  return data;
};

const writeFile = (fileName, data) => {
  fs.writeFileSync(p + fileName, JSON.stringify({ data }), {
    encoding: "utf-8",
  });
};

module.exports = { readFile, writeFile };
