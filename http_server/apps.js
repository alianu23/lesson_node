const { json } = require("body-parser");
const express = require("express");
const fs = require("fs");
const port = 8008;
const app = express();

app.use(express.json());
const { v4: uuidv4 } = require("uuid");

app.get("/api/users", (req, res) => {
  console.log("Hello All users method");
  res.status(200).json({ message: "success" });
});

app.post("/api/users", (req, res) => {
  console.log("Hello Create new user method", req.body);
  const newUser = { id: uuidv4(), ...req.body };

  const { users } = JSON.parse(
    fs.readFileSync("./users1.json", { encoding: "utf-8" })
  );

  users.push(newUser);
  fs.writeFileSync("./users1.json", JSON.stringify({ users }), {
    encoding: "utf-8",
  });
  res.status(201).json({ message: "success" });
});

app.put("/api/users/:id", (req, res) => {
  console.log("Hello update user by id method");
  res.status(200).json({ message: "success" });
});

app.delete("/api/users/:userId", (req, res) => {
  console.log("Hello delete user by id method");
  const { userId } = req.params;
  const { users } = JSON.parse(
    fs.readFileSync("./users1.json", { encoding: "utf-8" })
  );
  const index = users.findIndex((el) => el.id === userId);
  if (index < 0) {
    res.status(400).json({ massege: `${userId} is not found` });
  } else {
    users.splice(index, 1);
    fs.writeFileSync("./users1.json", JSON.stringify({ users }), {
      encoding: "utf-8",
    });
    res.status(200).json({ massege: `${userId} is deleted` });
  }
});

app.listen(port, () => console.log("Server is listening at 8008 port"));
