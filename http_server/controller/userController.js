const { v4: uuidv4 } = require("uuid");
const { readFile, writeFile } = require("../utils/fileHandler");

const getAllUser = (req, res) => {
  console.log("Hello All users method");
  const users = readFile("users.json");
  res.status(200).json({ message: "success", users });
};

const getUserById = (req, res) => {
  console.log("get an user id");
  const { userId } = req.params;
  const users = readFile("users.json");
  const findUser = users.filter((user) => user.id === userId);
  if (findUser.length === 0) {
    res.status(400).json({ message: `There is no ${userId} user` });
  } else {
    res
      .status(200)
      .json({ message: `Found this  ${userId} user`, user: findUser[0] });
  }
};

const createUser = (req, res) => {
  console.log("Hello Create new user method", req.body);
  const newUser = { id: uuidv4(), ...req.body };
  const users = readFile("users.json");
  console.log("ALL USER", users);
  users.push(newUser);
  writeFile("users.json", users);
  res.status(200).json({
    message: `Successfully created new user`,
    user: newUser,
  });
};

const updateUserById = (req, res) => {
  console.log("Hello update user by id method");
  const { userId } = req.params;
  const users = readFile("/users.json");
  let index = users.findIndex((user) => user.id === userId);
  if (index === -1) {
    res.status(400).json({ message: `There is no ${userId} user` });
  } else {
    users[index] = { ...users[index], ...req.body };
    writeFile("users.json", users);
    res
      .status(200)
      .json({ message: `Updated this ${userId} user`, user: users[index] });
  }
};

const deleteUserById = (req, res) => {
  console.log("Hello delete user by id method");
  const { userId } = req.params;
  const users = readFile("users.json");
  const index = users.findIndex((el) => el.id === userId);
  if (index < 0) {
    res.status(400).json({ massege: `${userId} is not found` });
  } else {
    users.splice(index, 1);
    writeFile("users.json", users);
    res.status(200).json({ massege: `${userId} is deleted` });
  }
};

module.exports = {
  createUser,
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
