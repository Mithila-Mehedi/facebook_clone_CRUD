import React from 'react'
import './rightbar.css'
import {Users} from '../dummyData'
import Online from '../online/online'

export default function Rightbar({profile}) {

    const HomeRightbar = () => {
        return(
            <>
            <div className="birthdayContainer">
               <img src="assests/gift.png" alt="" className="birthdayImg" />
               <span className="birthdayText"> <b>Mithila</b> and <b>3 other </b> friends
               have a birthday today</span>
               </div>
            <img src="assests/ad.png" alt="" className="rightbarAD" />
           <h4 className="rightbarTitle">Online Friends</h4>
           <ul className="rightbarFriendList">
               {Users.map(u => (
                   <Online key="u.id" user={u}/>
               ))}
           </ul>
          </> 
        )
    }

    const ProfileRightbar =() => {
        return(
            <>
            <h4 className="rightbarTitle">User information</h4>
           <div className="rightbarInfo">
               <div className="rightbarInfoItem">
                   <span className="rightbarInfoKey">City:</span>
                   <span className="rightbarInfoValue">New York</span>
               </div>

               <div className="rightbarInfoItem">
                   <span className="rightbarInfoKey">From:</span>
                   <span className="rightbarInfoValue">Bangladesh</span>
               </div>

               <div className="rightbarInfoItem">
                   <span className="rightbarInfoKey">Relationship:</span>
                   <span className="rightbarInfoValue">Single</span>
               </div>
           </div>

           <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="assests/persons/black1.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Meem Mehedi</span>
                </div>
            </div>
            </>
        )
    }
    return (
        <div className="rightbar">
           <div className="rightbarWrapper">
               <HomeRightbar/>
           </div>
        </div>
    )
}
