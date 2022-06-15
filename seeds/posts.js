const { Post } = require("../models");

const postData = [
  {
    title: "This is the first post",
    post_text: "The first post!",
    user_id: 1,
  },
  {
    title: "This is my post",
    post_text:
      "hahahahahahaha",
    user_id: 2,
  },
  {
    title: "This is another one of my posts",
    post_text:
      "I like banana",
    user_id: 2,
  },
  {
    title: "The weather today",
    post_text:
      "man o man is it hot",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;