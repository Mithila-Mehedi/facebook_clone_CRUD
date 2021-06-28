import React, { useState } from "react";
import "./post.css";
import { MoreVert, PowerSettingsNewOutlined } from "@material-ui/icons";
import profile from "../../assets/images/profile.jpg";
import heartLogo from "../../assets/logos/heart.png";
import likeLogo from "../../assets/logos/like.png";
import Moment from "react-moment";
import { deletePost } from "./utility";
import { IconButton, MenuItem, Menu, Button } from "@material-ui/core";
import axios from "axios";
import Modal from "../post/modal";
import { updatePost } from "../post/utility";

export default function Post(props) {
  const [like, setLike] = useState(props.post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [post, setPost] = React.useState(props.post);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async () => {
    const response = await deletePost(post._id);
    console.log(response);
    alert("post deleted");
  };

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={profile} alt="" />
            <span className="postUserName">
              <b>{post.postedBy}</b>
            </span>
            <span className="postDate">
              <Moment toNow>{post.createdAt}</Moment>
            </span>
          </div>
          <div className="postTopRight">
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVert />
            </Button>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc} </span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={likeLogo}
              onClick={likeHandler}
              alt=""
              className="likeIcon"
            />
            <img
              src={heartLogo}
              onClick={likeHandler}
              alt=""
              className="likeIcon"
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} Comments</span>
          </div>
        </div>
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <Modal post={post} setPost={setPost} />
        </MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </div>
  );
}
