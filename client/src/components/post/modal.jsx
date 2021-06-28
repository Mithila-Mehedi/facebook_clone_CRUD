import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { updatePost } from "../post/utility";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal({ post, setPost }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [postDesc, setPostDesc] = React.useState("");
  console.log(post);

  useEffect(() => {
    if (post) {
      setPostDesc(post.desc);
    }
  }, [post]);

  const handleEdit = async () => {
    const data = {
      userId: post.userId,
      desc: postDesc,
    };

    const response = await updatePost(data, post._id);

    if (response.status === 200) {
      let newPost = post;
      newPost.desc = postDesc;
      console.log(newPost);
      setPost(newPost);
      setOpen(false);
    }

    console.log(response);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title" style={{ margin: "auto" }}>
        button
      </h2>
      <hr style={{ margin: "10px" }}></hr>
      {/* <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p> */}
      <input
        placeholder="What's on your mind?"
        type="text"
        value={postDesc}
        onChange={(e) => setPostDesc(e.target.value)}
      />
      <button onClick={handleEdit}>Save</button>
    </div>
  );

  return (
    <div>
      <h2 style={{ border: "none" }} onClick={handleOpen}>
        Edit
      </h2>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
