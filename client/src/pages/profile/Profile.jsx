import React, { useEffect } from "react";
import "./profile.css";
import Topbar from "../../components/Topbar/Topbar";
import Rightbar from "../../components/rightbar/rightbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import cover from "../../assets/images/cover.jpg";
import profile from "../../assets/images/profile.jpg";
import axios from "axios";

export default function Profile() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [posts, setPosts] = React.useState([]);
  const fetchPost = async () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    const response = await axios.get(
      `http://localhost:8000/api/posts/timeline/${userInfo._id}`
    );

    if (response.status === 200) {
      setPosts(response.data.posts);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      <Topbar />
      <div className="Profile">
        {/* <Sidebar/> */}
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={cover} alt="" />
              <img className="profileUserImg" src={profile} alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{userInfo.username}</h4>
              {userInfo.bio && (
                <h4 className="profileInfoDesc">{userInfo.bio}</h4>
              )}
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed posts={posts} />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
}
