import HomeMainContent from "../HomeMainContent/Index";
import "./style.css"

const HomeMain = ({userName}) => {
  return(
    <div className="HomeMain">
      <h1 className="title">Bonjour <span className="title_userName">{userName}</span></h1>
      <p className="motivational-text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <HomeMainContent/>
    </div>
  )
}

export default HomeMain;
