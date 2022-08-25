import { useContext } from "react";
import { DataContext } from "../../services/DataContext";
import HomeMainContent from "../HomeMainContent/Index";
import "./style.scss"

const HomeMain = () => {
  const {data} = useContext(DataContext);

  return(    
    <div className="HomeMain">
      <h1 className="title">Bonjour <span className="title_userName">{data?.firstName}</span></h1>
      <p className="motivational-text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <HomeMainContent/>       
    </div>
  )
  
}

export default HomeMain;
