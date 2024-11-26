import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Home, Search, Explore, Message, AddCircle, AccountCircle } from '@mui/icons-material';
import './Sidebar.css';
import newLogo from '../../assets/favicon.png'; // 로컬 이미지 파일 가져오기

//부모 div 플렉스로 만들고 영역정하기
export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState();
  const [isSearch, setIsSearch] = useState();
  const [pageId, setPageId] =useState();

  useEffect(()=>{
    setPageId(localStorage.getItem("pageId"));
    if(localStorage.getItem("pageId") <= 1 || localStorage.getItem("pageId")>3){
      setIsCollapsed(false);
      setIsSearch(false);
    }else{
      setIsCollapsed(true);
      setIsSearch(false);
    }
    console.log(pageId);
  },[])

  const handleToggleSidebar = (check) => {
    if(check>1&&check<5){
      setIsCollapsed(true);
      setIsSearch(false);
    }else if(check<1||check>4){
      setIsCollapsed(false);
      setIsSearch(false);
    }else if(check===1 && pageId>1&& pageId<5){
      setIsSearch(!isSearch);
    }else{
      setIsSearch(!isSearch);
      setIsCollapsed(!isCollapsed);
    }
    if((check ===1 && pageId<2) || check!==1 ){
      localStorage.setItem("pageId",check);
      setPageId(check);
    }
  }
 
  return (
  <div className='main'>
    <div className={`sidebar ${isCollapsed ? "collapsed":""}`}>
      <div className="sidebar_container">
        <img
          src={newLogo} // 로컬 이미지 변수 사용
          alt="Baesh Logo"
          className={`sidebar_logo ${isCollapsed ? "collapsed":""}`}
        />
        <Link to="/" 
        className={`sidebar_option ${isCollapsed ? "collapsed":""}`}
        onClick={()=>{handleToggleSidebar(0)}}>
          <Home />
          {!isCollapsed && <span>홈</span>}
        </Link>

        <div 
        className={`sidebar_option ${isCollapsed ? "collapsed":""}`} 
        onClick={()=>handleToggleSidebar(1)}>
            <Search />
            {!isCollapsed && <span>검색</span>}
        </div>

        <Link to="/town" 
        className={`sidebar_option ${isCollapsed ? "collapsed":""}`}
        onClick={()=>handleToggleSidebar(2)}
        >
          <Explore />
          {!isCollapsed && <span>마을</span>}
        </Link>

        <Link to="/messages" 
        className={`sidebar_option ${isCollapsed ? "collapsed":""}`}
        onClick={()=>handleToggleSidebar(3)}
        >
          <Message />
          {!isCollapsed && <span>메시지</span>}
        </Link>

        <Link to="/upload" 
        className={`sidebar_option ${isCollapsed ? "collapsed":""}`}
        onClick={()=>handleToggleSidebar(4)}>
          <AddCircle />
          {!isCollapsed && <span>게시</span>}
        </Link>

        <Link to="/profile" 
        className={`sidebar_option ${isCollapsed ? "collapsed":""}`}
        onClick={()=>handleToggleSidebar(5)}>
          <AccountCircle />
          {!isCollapsed && <span>프로필</span>}
        </Link>
      </div>
      <diV className="sidebar_container_user">
        <img className='sidebar_container_user_img' src={"https://via.placeholder.com/75"} alt="user" />
        {!isCollapsed &&(
        <Link to="/login" className=''>
          <span>로그인</span>
        </Link>)}
      </diV>

    </div>
    {isSearch&&
    <div className="Search">

    </div>}
    <div className={`content ${isCollapsed ? "collapsed":""}`}>
      <Outlet/>
    </div>
  </div>
  );
}
