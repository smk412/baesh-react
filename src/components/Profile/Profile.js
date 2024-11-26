import React, { useState } from "react";
import {} from"@mui/icons-material";
import "./Profile.css";
import FollowPopup from "../Follow/FollowPopup/FollowPopup";
import ProfileFeed from "./ProfileFeed/ProfileFeed";
import ProfileFeedPopup from "./ProfileFeedPopup/ProfileFeedPopup";


const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const [followPopupContent, setFollowPopupContent] = useState(null);
  const [feedPopupContent,setFeedPopupContent] =useState(null);
  const [isfollowPopupVisible, setIsFollowPopupVisible] = useState(false);
  const [isFeedPopupVisible, setIsFeedPopupVisible] = useState(false);

  const [feeds,setFeeds] =useState([
      {
        id: 1,
        userName: '명현재',
        caption: 'A beautiful day!',
        postImageUrl: 'https://via.placeholder.com/500',
        postProfileUrl: 'https://via.placeholder.com/300',
      },
      {
        id: 2,
        userName: '명현재',
        caption: 'Having fun at the beach!',
        postImageUrl: 'https://via.placeholder.com/500',
        postProfileUrl: 'https://via.placeholder.com/300',
      },
      {
        id: 3,
        userName: '명현재',
        caption: 'A beautiful day!',
        postImageUrl: 'https://via.placeholder.com/500',
        postProfileUrl: 'https://via.placeholder.com/300',
      },
  ])

  const [user,setUser] =useState(
    {
        id:1,
        userName:'명현재',
        followers: 2,
        follow: 2,
    }
  )
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handlePopupOpen = (ContentType,type) => {
    if(!type){
        setFollowPopupContent(ContentType); // 팝업에 표시할 콘텐츠 설정
        setIsFollowPopupVisible(true); // 팝업 표시
    }else{
        setFeedPopupContent(ContentType);
        setIsFeedPopupVisible(true);
    }
  };

  const handlePopupClose = (type) => {
    if(!type){
        setIsFollowPopupVisible(false); // 팝업 숨기기
    }else{
        setIsFeedPopupVisible(false);
    }
  };

  return (
    <div className="profile-container">
      {/* 프로필 정보 */}
      <div className="profile-header">
        <div className="profile-picture">
          <img
            src="https://via.placeholder.com/150"
            alt="User Profile"
            className="profile-img"
          />
        </div>
        <div className="profile-details">
          <div className="profile-name">
            <h2>guswo1205</h2>
            <button>프로필 편집</button>
          </div>
          <div className="profile-stats">
            <span>게시물 {feeds.length}</span>
            <span onClick={() => handlePopupOpen("followers",0)} className="clickable">
              팔로워 {user.followers}
            </span>
            <span onClick={() => handlePopupOpen("following",0)} className="clickable">
              팔로우 {user.follow}
            </span>
          </div>
          <div className="profile-bio">
            <p>명현재</p>
          </div>
        </div>
      </div>

      {/* 탭 네비게이션 */}
      <div className="profile-tabs">
        <button
          className={activeTab === "posts" ? "active" : ""}
          onClick={() => handleTabClick("posts")}
        >
          게시물
        </button>
        <button
          className={activeTab === "saved" ? "active" : ""}
          onClick={() => handleTabClick("saved")}
        >
          저장됨
        </button>
        <button
          className={activeTab === "tagged" ? "active" : ""}
          onClick={() => handleTabClick("tagged")}
        >
          태그됨
        </button>
      </div>
      <hr style={{marginBottom:"10px",marginTop:"0"}}/>
      {/* 콘텐츠 영역 */}
      <div className="profile-content">
        {activeTab === "posts"&&(
          feeds.map((feed)=>(
            <ProfileFeed 
            feedLength={feeds.length} 
            handlePopupOpen={handlePopupOpen}
            feedId={feed.id}
            postImageUrl={feed.postProfileUrl}
            />
          ))
        )}

        {activeTab === "saved" && (
          <div className="saved-tab">
            <p>저장한 게시물이 없습니다.</p>
          </div>
        )}
        {activeTab === "tagged" && (
          <div className="tagged-tab">
            <p>태그된 게시물이 없습니다.</p>
          </div>
        )}
      </div>

      {/* 팔로우 팝업 영역 */}
      {isfollowPopupVisible && (
            <FollowPopup type={followPopupContent === "followers" ? "팔로워" : "팔로우"} handlePopupClose={handlePopupClose}/>
        )}
      {/* 피드영역 팜업 영역 */}
      {isFeedPopupVisible &&(
        <ProfileFeedPopup Profile={feeds.find((feed)=>{ return feed.id == feedPopupContent })} handlePopupClose={handlePopupClose}/>
      )}
    </div>
  );
};

export default Profile;