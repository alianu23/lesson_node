const { count } = require("console");
const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello From express Server");
});
app.get("/about", (req, res) => {
  res.status(200).json({
    name: "Naraa",
    age: "20",
    isVerivied: true,
    score: [100, 102],
    address: { no: 100 },
  });
});
app.get("/wordCount", (req, res) => {
  const content = fs.readFileSync("test.txt", { encoding: "utf-8" });
  const count = content.split(" ").length;
  res.send(`Count words number - ` + count);
});

app.get("/user/:userId", (req, res) => {
  const { userId } = req.params;
  console.log("query", userId);
  const findUser = users.filter((user) => user.id === Number(userId));
  console.log("user", findUser);
  if (findUser.length === 0) {
    res.status(404).json({ message: " not found" });
  } else {
    res.status(200).json({ message: "User found", user: findUser[0] });
  }
});

app.get("/users", (req, res) => {
  const { users } = json.parse(fs.readFileSync("/users.json", "utf-8"));
  res.status(200).json({ message: "All", users });
});

app.post("/users", (req, res) => {
  const body = req.body;
  const newUser = {
    id: users.length + 1,
    username: body.username,
    password: body.password,
  };
  users.push(newUser);
  res.status(200).json({ message: "All", users });
});

//JSON.parse() = json to obj
//JSON.stringify() = obj to json
app.listen(8008, () => console.log("Server is listening on 8008 port"));
