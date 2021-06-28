import React, { useEffect, useState } from "react";
import Post from "../post/post";
import axios from "axios";

export default function Timeline({ posts }) {
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
}
