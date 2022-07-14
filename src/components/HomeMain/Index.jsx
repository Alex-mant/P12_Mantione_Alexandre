import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import HomeMainContent from "../HomeMainContent/Index";
import "./style.css"

const HomeMain = () => {
  let {data} = useContext(DataContext);
  return(    
    <div className="HomeMain"> 
    {data !== undefined ?    
      <>
        <h1 className="title">Bonjour <span className="title_userName">{data.userInfos.firstName}</span></h1>
        <p className="motivational-text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        <HomeMainContent/>
      </> : <h1 className="loading-data">Loading...</h1>}
    </div>  
  ) 
}

export default HomeMain;
