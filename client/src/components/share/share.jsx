import React, { useState } from "react";
import { createPost } from "./utility";
import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";

export default function Share() {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    const [post, setPost] = useState("");

    const handleClick = async () => {
        if (post) {
            const data = {
                userId: userInfo._id,
                desc: post,
            };

            const response = await createPost(data);
            console.log(response)

            if (response.status === 200) {
                alert(response.data.message);
                setPost("");
            } else {
                alert(response);
            }
        }
    };

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img
                        className="shareProfileImg"
                        src="/assests/persons/black1.jpg"
                        alt="profile-img"
                    />
                    <input
                        placeholder={`What is in your mind ${userInfo.username}?`}
                        onChange={(event) => setPost(event.target.value)}
                        value={post}
                        className="shareInput"
                    />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia
                                htmlColor="tomato"
                                className="shareIcon"
                            />
                            <span className="shareOptionText">
                                Photos or Video
                            </span>
                        </div>

                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>

                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>

                        <div className="shareOption">
                            <EmojiEmotions
                                htmlColor="goldenrod"
                                className="shareIcon"
                            />
                            <span className="shareOptionText">Feelings</span>
                        </div>

                        <button onClick={handleClick} className="shareButton">
                            Share
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
