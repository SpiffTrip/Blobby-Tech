const User = require("../models/User");

const userData = [
  {
    username: "Bobber",
    email: "bobber@gmail.com",
    password: "bob",
  },
  {
    username: "Tommer",
    email: "tommer@gmail.com",
    password: "tom",
  },
  {
    username: "Robber",
    email: "robber@gmail.com",
    password: "rob",
  },
];

const seedUsers = () => User.bulkCreate(userData);
