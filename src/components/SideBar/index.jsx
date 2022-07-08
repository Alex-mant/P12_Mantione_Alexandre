import React from 'react';
import CaloriesIcon from '../../assets/Calories-icon.svg';
import GlucidesIcon from '../../assets/Glucides-icon.svg';
import LipidesIcon from '../../assets/Lipides-icon.svg';
import ProteinesIcon from '../../assets/Proteines-icon.svg';
import SideBarCard from '../SideBarCards';
import "./styles.css"


/**
 * It returns a div with four SideBarCard components inside.
 * @returns A React component.
 */
const SideBar = () => {
  return (
    <div className="sideBarData">
      <SideBarCard icon={CaloriesIcon} count={'1,234'} unit={'kCal'} text={"Calories"}/>
      <SideBarCard icon={ProteinesIcon} count={'234'} unit={'g'} text={"Proteines"}/>    
      <SideBarCard icon={GlucidesIcon} count={'343'} unit={'g'} text={"Glucides"}/>    
      <SideBarCard icon={LipidesIcon} count={'434'} unit={'g'} text={"Lipides"}/>    
    </div>
  );
}

export default SideBar;
