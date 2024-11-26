import React, { useState } from "react";
import Follow from "../FollowUser/FollowUser";
import "./FollowPopup.css";

export default function FollowPopup({type,handlePopupClose}){
      
  const [follow , setFollow] = useState([
    {
        id: 1,
        userName: '박지훈',
        postProfileUrl: 'https://via.placeholder.com/150',
      },
      {
        id: 2,
        userName: '송민규',
        postProfileUrl: 'https://via.placeholder.com/150',
      },
  ])

  const [followers , setFollowers] = useState([
    {
        id: 1,
        userName: '송민규',
        postProfileUrl: 'https://via.placeholder.com/150',
      },
      {
        id: 2,
        userName: '박지훈',
        postProfileUrl: 'https://via.placeholder.com/150',
      },
  ])


    return(
        <div className="popup-overlay" onClick={()=>{handlePopupClose(0)}}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h3>{type === "followers" ? "팔로워" : "팔로우"}</h3>
              <button className="close-button" onClick={()=>{handlePopupClose(0)}}>
                ✕
              </button>
            </div>
            <div className="popup-content">
              {(type === "followers" ? followers : follow).map((user)=>(
                  <Follow
                    userId={user.id}
                    type={type === "followers" ? "팔로워" : "팔로우"}
                    userName={user.userName}
                    postProfileUrl={user.postProfileUrl}
                  />
              ))}
            </div>
          </div>
        </div>
    )
}