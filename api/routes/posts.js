const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

///create a post
router.post("/", async (req, res) => {
  const author = await User.findById(req.body.userId);
  let postBody = req.body;
  postBody["postedBy"] = author.username;

  const newPost = new Post(postBody);

  try {
    const savedPost = await newPost.save();

    const response = {
      message: "Post created.",
      post: savedPost,
    };
    res.status(200).json(response);
  } catch (err) {
    const response = {
      message: "Couldn't create post.",
      error: err,
    };
    res.status(400).json(response);
  }
});

///update post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    // if (post.userId === req.body.userId) {
    await post.updateOne({
      $set: req.body,
    });
    res.status(200).json("The post has been updated");
    // } else {
    //   res.status(403).json("you can update only your post");
    // }
  } catch (err) {
    res.status(400).json(err);
  }
});

///delete post

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    // if (post.userId === req.body.userId) {
    await post.deleteOne();
    res.status(200).json("The post has been deleted");
    // } else {
    //     res.status(403).json("you can delete only your post");
    // }
  } catch (err) {
    res.status(400).json(err);
  }
});

///like a post

router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("The post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("Post has be disliked");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//get a post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

///get timeline posts
router.get("/timeline/:userId", async (req, res) => {
  let postArray = [];
  try {
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({ userId: currentUser._id });

    res.status(200).json({ posts: userPosts });
  } catch (err) {
    res.status(400).json(err);
  }
});

///get newsfeed post
router.get("/", async (req, res) => {
  try {
    const allPost = await Post.find({});

    res.status(200).json({ posts: allPost });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
