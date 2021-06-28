import React, { useEffect } from "react";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";
import axios from "axios";
import isAuthenticated from "../../components/Utility/Utility";
import { useHistory } from "react-router-dom";

import "./home.css";

export default function Home() {
  const history = useHistory();
  const [posts, setPosts] = React.useState([]);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const fetchPost = async () => {
    const response = await axios.get(`http://localhost:8000/api/posts/`);

    if (response.status === 200) {
      setPosts(response.data.posts);
    }
  };

  useEffect(() => {
    fetchPost();
    if (!isAuthenticated()) {
      history.push("/login");
    }
  }, [history]);

  return (
    <div>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        {userInfo && <Feed posts={posts} />}
        <Rightbar />
      </div>
    </div>
  );
}
