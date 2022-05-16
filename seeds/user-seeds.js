const { User } = require("../models");

const userData = [
  {
    username: "todd",
    email: "todd@email.com",
    password: "password123",
  },
  {
    username: "blair",
    email: "blair@email.com",
    password: "password123",
  },
  {
    username: "jack",
    email: "jack@email.com",
    password: "password123",
  },
  {
    username: "philip",
    email: "philip@email.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
