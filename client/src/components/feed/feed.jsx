import React, { useEffect } from "react";
import Share from "../share/share";
import Timeline from "./timeline";
import axios from "axios";
import "./feed.css";

export default function Feed({ posts }) {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Timeline posts={posts} />
      </div>
    </div>
  );
}
