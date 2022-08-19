import React, { useContext } from 'react';
import CaloriesIcon from '../../assets/Calories-icon.svg';
import GlucidesIcon from '../../assets/Glucides-icon.svg';
import LipidesIcon from '../../assets/Lipides-icon.svg';
import ProteinesIcon from '../../assets/Proteines-icon.svg';
import { DataContext } from '../../services/DataContext';
import SideBarCard from '../SideBarCards';
import "./styles.scss"


/**
 * It returns a div with four SideBarCard components inside.
 * @returns A React component.
 */

const SideBar = () => {
  const {data} = useContext(DataContext);
  const keyData = data?.formatKeyData;

  return (
    <div className="sideBarData">
      <SideBarCard icon={CaloriesIcon} count={keyData?.calorieCount} unit={'kCal'} nameOfCount={"Calories"}/>
      <SideBarCard icon={ProteinesIcon} count={keyData?.proteinCount} unit={'g'} nameOfCount={"Proteines"}/>    
      <SideBarCard icon={GlucidesIcon} count={keyData?.carbohydrateCount} unit={'g'} nameOfCount={"Glucides"}/>    
      <SideBarCard icon={LipidesIcon} count={keyData?.lipidCount} unit={'g'} nameOfCount={"Lipides"}/>    
    </div>
  );
}

export default SideBar;
