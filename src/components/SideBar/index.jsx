import React, { useContext } from 'react';
import CaloriesIcon from '../../assets/Calories-icon.svg';
import GlucidesIcon from '../../assets/Glucides-icon.svg';
import LipidesIcon from '../../assets/Lipides-icon.svg';
import ProteinesIcon from '../../assets/Proteines-icon.svg';
import UserData from '../../model/UserData';
import { DataContext } from '../../services/DataContext';
import SideBarCard from '../SideBarCards';
import "./styles.css"


/**
 * It returns a div with four SideBarCard components inside.
 * @returns A React component.
 */
const SideBar = () => {
  const {data} = useContext(DataContext);
  if (data === undefined) return <></>;
  const {keyData} = new UserData(data);

  return (
    <div className="sideBarData">
      <SideBarCard pathIcon={CaloriesIcon} iCount={keyData.calorieCount} strUnit={'kCal'} strNameOfCount={"Calories"}/>
      <SideBarCard pathIcon={ProteinesIcon} iCount={keyData.proteinCount} strUnit={'g'} strNameOfCount={"Proteines"}/>    
      <SideBarCard pathIcon={GlucidesIcon} iCount={keyData.carbohydrateCount} strUnit={'g'} strNameOfCount={"Glucides"}/>    
      <SideBarCard pathIcon={LipidesIcon} iCount={keyData.lipidCount} strUnit={'g'} strNameOfCount={"Lipides"}/>    
    </div>
  );
}

export default SideBar;
