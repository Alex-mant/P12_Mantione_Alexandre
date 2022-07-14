import React, { useContext } from 'react';
import CaloriesIcon from '../../assets/Calories-icon.svg';
import GlucidesIcon from '../../assets/Glucides-icon.svg';
import LipidesIcon from '../../assets/Lipides-icon.svg';
import ProteinesIcon from '../../assets/Proteines-icon.svg';
import { DataContext } from '../../context/DataContext';
import SideBarCard from '../SideBarCards';
import "./styles.css"


/**
 * It returns a div with four SideBarCard components inside.
 * @returns A React component.
 */
const SideBar = () => {
  const {data} = useContext(DataContext);
 
  return (
    <div className="sideBarData">
    { data !== undefined ?
      <>
        <SideBarCard pathIcon={CaloriesIcon} iCount={data.keyData.calorieCount.toLocaleString('en-US')} strUnit={'kCal'} strNameOfCount={"Calories"}/>
        <SideBarCard pathIcon={ProteinesIcon} iCount={data.keyData.proteinCount.toLocaleString('en-US')} strUnit={'g'} strNameOfCount={"Proteines"}/>    
        <SideBarCard pathIcon={GlucidesIcon} iCount={data.keyData.carbohydrateCount.toLocaleString('en-US')} strUnit={'g'} strNameOfCount={"Glucides"}/>    
        <SideBarCard pathIcon={LipidesIcon} iCount={data.keyData.lipidCount.toLocaleString('en-US')} strUnit={'g'} strNameOfCount={"Lipides"}/>    
      </> : <h1 className='loading-data'>Loading...</h1>
    }
    </div>
  );
}

export default SideBar;
