import UserData from "../UserData/Index";
import "./style.css"

const Main = () => {
  return(
    <div className="HomeMain">
      <h1 className="title">Bonjour <span className="title_userName">Thomas</span></h1>
      <p className="motivational-text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <UserData />
    </div>
  )
}

export default Main;
