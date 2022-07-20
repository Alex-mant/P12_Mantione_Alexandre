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
      arrow.style.transform = 'rotate(135deg)';
      setIsHidden(false);
    }else {
      tools.style.width = '50px';
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
        <div className='user'>
          <img className='devtools_userIcon' src={userIcon} alt="" />
          <Link to={"?user=12"}>
            UserId 12
          </Link>
        </div>      
        <div className='user'>
          <img className='devtools_userIcon' src={userIcon} alt="" />
          <Link to={"?user=18"}>
            UserId 18
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideDevTools;
