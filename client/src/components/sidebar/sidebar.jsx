import React from 'react'
import './sidebar.css'
import {RssFeed,
    HelpOutline,
    WorkOutline,
    Event,
    School,
    Bookmark,
    Group,
    PlayCircleFilledOutlined} from '@material-ui/icons'
import {Users} from '../dummyData'
import CloseFriend from '../closeFriend/CloseFriend'

export default function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebarWrapper">
              <ul className="sidebarList">
                  <li className="sidebarListItem">
                        <RssFeed className="sidebarIcom"/>
                        <span className="sidebarListItemText">
                            Feed
                        </span>
                  </li>

                  <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className="sidebarIcom"/>
                        <span className="sidebarListItemText">
                           Videos
                        </span>
                  </li>

                  <li className="sidebarListItem">
                        <Group className="sidebarIcom"/>
                        <span className="sidebarListItemText">
                            Groups
                        </span>
                  </li>

                  <li className="sidebarListItem">
                        <Bookmark className="sidebarIcom"/>
                        <span className="sidebarListItemText">
                           Bookmarks
                        </span>
                  </li>

                  <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcom"/>
                        <span className="sidebarListItemText">
                            Questions
                        </span>
                  </li>

                  <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcom"/>
                        <span className="sidebarListItemText">
                            Jobs
                        </span>
                  </li>

                  <li className="sidebarListItem">
                        <Event className="sidebarIcom"/>
                        <span className="sidebarListItemText">
                            Events
                        </span>
                  </li>

                  <li className="sidebarListItem">
                        <School className="sidebarIcom"/>
                        <span className="sidebarListItemText">
                           Courses
                        </span>
                  </li>
              </ul>
              <button className="sidebarButton">Show More</button>
              <hr className="sidebarHR"/>
              <ul className="sidebarFriendList">
                  {Users.map(u => (
                      <CloseFriend  key={u.id} user={u}/>
                  ))}

              </ul>
           </div>
        </div>
    )
}
