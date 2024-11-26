import React from 'react';
import "./FollowUser.css"
export default function Follow({userId,userName,postProfileUrl,type}){
    return(
        <div className="follow" key={userId}>
            <div className="follow">
                <img className="followImg" src={postProfileUrl} alt="user"/>
                <p>{userName}</p>
            </div>
            <button>{type}중</button>
        </div>
    )
}