import React from 'react';
import CaloriesIcon from '../../assets/Calories-icon';
import GlucidesIcon from '../../assets/Glucides-icon';
import LipidesIcon from '../../assets/Lipides-icon';
import ProteinesIcon from '../../assets/Proteines-icon';
import SideBarCard from '../SideBarCards';
import "./styles.css"

/* A function that returns a div with 4 SideBarCard components. */
const SideBar = () => {
  return (
    <div className="sideBarData">
        <SideBarCard icon={<CaloriesIcon/>} data={"1,930"} unit={'kCal'} text={"Calories"}/>
        <SideBarCard icon={<ProteinesIcon/>} data={232} unit={'g'} text={"Proteines"}/>    
        <SideBarCard icon={<GlucidesIcon/>} data={123} unit={'g'} text={"Glucides"}/>    
        <SideBarCard icon={<LipidesIcon/>} data={423} unit={'g'} text={"Lipides"}/>    
      </div>
  );
}

export default SideBar;
