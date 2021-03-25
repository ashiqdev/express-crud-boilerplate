const express = require('express');
const { catchErrors } = require('../helpers/error-catcher');
const { updateOne } = require('../models/Post');

const {
  savePost,
  getAllPosts,
  deletePost,
  getPostById,
  updatePost,
} = require('../services/post-services');

const router = express.Router();

const getHandler = async (req, res) => {
  const posts = await getAllPosts();
  res.status(200).json(posts);
};

const getByIdHandler = async (req, res) => {
  const { id } = req.params;
  const post = await getPostById(id);
  res.status(200).json(post);
};

const postHandler = async (req, res) => {
  const post = await savePost(req.body);
  res.status(201).json(post);
};

const putHandler = async (req, res) => {
  const { id } = req.params;
  const post = await updatePost(id, req.body);
  res.status(200).json(post);
};

const deleteHandler = async (req, res) => {
  const { id } = req.params;
  const post = await deletePost(id);
  res.status(200).json(post);
};

router.get('/', catchErrors(getHandler));
router.get('/:id', catchErrors(getByIdHandler));
router.post('/', catchErrors(postHandler));
router.put('/:id', catchErrors(putHandler));
router.delete('/:id', catchErrors(deleteHandler));

module.exports = router;
