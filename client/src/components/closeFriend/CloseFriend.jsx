import React from 'react'
import './closeFriend.css'

export default function CloseFriend({user}) {
    return (
        <div>
            <li className="sidebarFriend">
                      <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendname">{user.username}</span>
                  </li> 
        </div>
    )
}
