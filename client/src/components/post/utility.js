import axios from "axios";

export const deletePost = async (postId) => {
  var config = {
    method: "delete",
    url: `http://localhost:8000/api/posts/${postId}`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    return await axios(config);
  } catch (err) {
    return err;
  }
};

export const updatePost = async (data, postId) => {
  var config = {
    method: "put",
    url: `http://localhost:8000/api/posts/${postId}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    return await axios(config);
  } catch (err) {
    return err;
  }
};
