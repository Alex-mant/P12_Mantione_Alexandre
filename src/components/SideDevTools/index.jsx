import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./styles.css"
import userIcon from '../../assets/userIcon.svg'

const SideDevTools = () => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleMe = () => {
    const tools = document.querySelector(".SideDevTools");
    const arrow = document.querySelector(".content-toggle");
    
    if (isHidden){
      tools.style.width = 'fit-content';
      tools.style.height = "fit-content";
      tools.style.borderRadius =  '15px 0 0 15px';
      arrow.style.transform = 'rotate(135deg)';
      setIsHidden(false);
    }else {
      tools.style.width = '50px';
      tools.style.height = "50px"
      tools.style.borderRadius =  '50% 0 0 50%';
      arrow.style.transform = 'rotate(315deg)';
      setIsHidden(true);
    }
  }

  return (
    <div className='SideDevTools' >
      <div className='togglerContainer'onClick={toggleMe}>
        <div className='content-toggle'/>
      </div>
      <div className="sideDevContainer">
        <h3 className='devtools_title'>DevTools</h3>
        <br/>
        <span className='subtitle'>Users</span>
        <div className='user'>
          <img className='devtools_userIcon' src={userIcon} alt="" />
          <Link to={"?user=12"}>
            Id 12
          </Link>
        </div>      
        <div className='user'>
          <img className='devtools_userIcon' src={userIcon} alt="" />
          <Link to={"?user=18"}>
            Id 18
          </Link>
        </div>
        <br/>
        <span className='subtitle'>MockedUsers</span>
        <div className='user'>
          <img className='devtools_userIcon' src={userIcon} alt="" />
          <Link to={"?mockedUser=22"}>
            Id 22
          </Link>
        </div>
        <div className='user'>
          <img className='devtools_userIcon' src={userIcon} alt="" />
          <Link to={"?mockedUser=28"}>
            Id 28
          </Link>
        </div>
        <br/>
        <span className='subtitle'>Other</span>
        <div className='user'>
          <img className='devtools_userIcon' src={userIcon} alt="" />
          <Link to={"/spotsee/home?user=12"}>
            404
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideDevTools;
