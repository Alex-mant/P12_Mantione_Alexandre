import { useContext } from "react";
import UserData from "../../model/UserData";
import { DataContext } from "../../services/DataContext";
import HomeMainContent from "../HomeMainContent/Index";
import "./style.scss"

const HomeMain = () => {
  const {data} = useContext(DataContext);
  if(data === undefined) return <><div className="loading"><h1>Loading...</h1></div></>;
  const {firstName} = new UserData(data);

  return(    
    <div className="HomeMain">     
      <h1 className="title">Bonjour <span className="title_userName">{firstName}</span></h1>
      <p className="motivational-text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <HomeMainContent/>       
    </div>
  )
  
}

export default HomeMain;
