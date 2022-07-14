import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import HomeMainContent from "../HomeMainContent/Index";
import "./style.css"

const HomeMain = () => {
  const {data} =  useContext(DataContext);
  const firstName = data?.mainData.userInfos.firstName

  return(    
    <div className="HomeMain">     
      <h1 className="title">Bonjour <span className="title_userName">{firstName}</span></h1>
      <p className="motivational-text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <HomeMainContent/>       
    </div>
  )
  
}

export default HomeMain;
