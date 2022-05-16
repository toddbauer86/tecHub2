const { Post } = require("../models");

const postData = [
  {
    title: "What has been your favorite part of the bootcamp?",
    post_content: "I like group projects",
    user_id: 3,
  },
  {
    title: "Does anyone know a good github tutorial?",
    post_content: "I still have problems with CLI",
    user_id: 1,
  },
  {
    title: "What are some good websites to learn javascript?",
    post_content: "I have been using edabit.com",
    user_id: 2,
  },
  {
    title: "Where can I buy an affordable video card?",
    post_content: "Everything is overpriced or out of stock :(",
    user_id: 3,
  },
  {
    title: "Where should I look for jobs?",
    post_content: "I have been trying linkedin!",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
