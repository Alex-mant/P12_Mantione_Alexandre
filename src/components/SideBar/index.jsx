import React from 'react';
import CaloriesIcon from '../../assets/Calories-icon.svg';
import GlucidesIcon from '../../assets/Glucides-icon.svg';
import LipidesIcon from '../../assets/Lipides-icon.svg';
import ProteinesIcon from '../../assets/Proteines-icon.svg';
// import { DataContext } from '../../context/DataContext';
import SideBarCard from '../SideBarCards';
import "./styles.css"


/**
 * It returns a div with four SideBarCard components inside.
 * @returns A React component.
 */
const SideBar = () => {
  // const {data} = useContext(DataContext);
  // const calorieCount = data.data.keyData.calorieCount;
  const calorieCount = 2346;
  // const ProteinsCount = data.data.keyData.proteinCount;
  const ProteinsCount = 876;
  // const GlucidesCount = data.data.keyData.carbohydrateCount;
  const GlucidesCount = 342;
  // const LipidesCount = data.data.keyData.lipidCount;
  const LipidesCount = 123;

  return (
    <div className="sideBarData">
      <SideBarCard pathIcon={CaloriesIcon} iCount={calorieCount} strUnit={'kCal'} strNameOfCount={"Calories"}/>
      <SideBarCard pathIcon={ProteinesIcon} iCount={ProteinsCount} strUnit={'g'} strNameOfCount={"Proteines"}/>    
      <SideBarCard pathIcon={GlucidesIcon} iCount={GlucidesCount} strUnit={'g'} strNameOfCount={"Glucides"}/>    
      <SideBarCard pathIcon={LipidesIcon} iCount={LipidesCount} strUnit={'g'} strNameOfCount={"Lipides"}/>    
    </div>
  );
}

export default SideBar;
