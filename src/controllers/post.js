const Post = require('../models/post');

exports.getPost = async (req, res, next) => {
  try {
    const posts = await Post.find();
    return res.status(200).json({
      posts: posts,
    });
  } catch (err) {
    if (err) next(err);
  }
};

exports.createPost = async (req, res, next) => {
  const content = req.body.content;

  try {
    const post = new Post({
      content: content,
    });
    await post.save(() => {
      return res.status(201).json({
        post: post,
      });
    });
  } catch (err) {
    if (err) next(err);
  }
};
