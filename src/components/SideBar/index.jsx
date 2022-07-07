import React from 'react';
import CaloriesIcon from '../../assets/Calories-icon';
import GlucidesIcon from '../../assets/Glucides-icon';
import LipidesIcon from '../../assets/Lipides-icon';
import ProteinesIcon from '../../assets/Proteines-icon';
import SideBarCard from '../SideBarCards';
import "./styles.css"

const SideBar = () => {
  return (
    <div className="sideBarData">
        <SideBarCard icon={<CaloriesIcon/>} data={1342} unit={'kCal'} text={"calories"}/>
        <SideBarCard icon={<ProteinesIcon/>} data={232} unit={'g'} text={"Proteines"}/>    
        <SideBarCard icon={<GlucidesIcon/>} data={123} unit={'g'} text={"glucides"}/>    
        <SideBarCard icon={<LipidesIcon/>} data={423} unit={'g'} text={"lipides"}/>    
      </div>
  );
}

export default SideBar;
