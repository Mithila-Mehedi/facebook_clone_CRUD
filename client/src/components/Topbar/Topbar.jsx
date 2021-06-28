import "./topbar.css";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import isAuthenticated from "../Utility/Utility";

export default function Topbar() {
  const history = useHistory();
  console.log(history);
  const [authenticated, setAuthenticated] = useState(true);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    setAuthenticated(isAuthenticated());
    if (!authenticated) {
      history.push("/login");
    }
  }, [authenticated]);

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    setAuthenticated(false);
    history.push("/login");
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/">
          <span className="logo">SOCIAL MEDIA</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            className="searchInput"
            placeholder="Search your friends, posts or video"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIcons">
          <div className="topbarIcon">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIcon">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIcon">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
          <Link to={`/profile/${userInfo.username}`}>
            <img
              src="/assests/persons/black1.jpg"
              alt="profile-img"
              className="topbarImg"
            />
          </Link>
          <div className="topbarIcon">
            {authenticated && <ExitToAppIcon onClick={handleLogout} />}
          </div>
        </div>
      </div>
    </div>
  );
}
