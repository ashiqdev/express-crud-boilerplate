const models = require('../models');
const { NotFound } = require('../utils/errors');

const { Post } = models;

const savePost = async (post) => {
  const newPost = await Post(post).save();
  return newPost;
};
const getAllPosts = async () => {
  const posts = await Post.find({});
  return posts;
};
const getPostById = async (id) => {
  const post = await Post.findOne({ _id: id });
  if (!post) throw new NotFound('Post not found by given id');
  return post;
};

const updatePost = async (id, post) => {
  const updatedPost = await Post.findOneAndUpdate({ _id: id }, post, {
    new: true,
  });

  if (!updatedPost) throw new NotFound('Post not found by given id');
  return updatedPost;
};

const deletePost = async (id) => {
  const post = await Post.findOneAndRemove({ _id });
  if (!post) throw new NotFound('Post not found by given id');

  return post;
};

module.exports = { savePost, getAllPosts, getPostById, updatePost, deletePost };
