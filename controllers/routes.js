const express = require('express');
const postRoutes = require('./post-controller');

const router = express.Router();

router.use('/posts', postRoutes);

module.exports = router;
