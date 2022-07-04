import CaloriesIcon from "../../assets/Calories-icon";
import GlucidesIcon from "../../assets/Glucides-icon";
import LipidesIcon from "../../assets/Lipides-icon";
import ProteinesIcon from "../../assets/Proteines-icon";
import "./style.css"

const UserData = () => {
  return(
    <div className="UserData">
      <div className="horizontalCharts">
        <div className="rechart1">
        </div>
        <div className="rechart2">
        </div>
      </div>
      <div className="sideBarData">
        <div className="sideBarData_Info">
          <CaloriesIcon/>
          <div className="info">
            <p>1,929kCal</p>
            <p>Calories</p>
          </div>          
        </div>
        <div className="sideBarData_Info">
        <ProteinesIcon/>
          <div className="info">
            <p>1,929kCal</p>
            <p>Calories</p>
          </div>          
        </div>
        <div className="sideBarData_Info">
        <GlucidesIcon/>
          <div className="info">
            <p>1,929kCal</p>
            <p>Calories</p>
          </div>          
        </div>
        <div className="sideBarData_Info">
        <LipidesIcon/>
          <div className="info">
            <p>1,929kCal</p>
            <p>Calories</p>
          </div>          
        </div>        
      </div>
    </div>
  )
}

export default UserData;
