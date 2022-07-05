import CaloriesIcon from "../../assets/Calories-icon";
import GlucidesIcon from "../../assets/Glucides-icon";
import LipidesIcon from "../../assets/Lipides-icon";
import ProteinesIcon from "../../assets/Proteines-icon";
import RadialChart from "../PieChart";
import SimpleRadarChart from "../SimpleRadarChart/index";
import "./style.css"


/**
 * It returns a div with two children divs, one with two children divs, and the other with four
 * children divs.
 * @returns A component that renders a div with className "UserData" and inside of it, two divs, one
 * 
 * with className "horizontalCharts" and the other with className "sideBarData".
 * @param {any} {data}
 * @return A React component
 */
const UserData = ({data}) => {
  return(
    <div className="UserData">
      <div className="horizontalCharts">
        <div className="rechart1">          
        </div>
        <div className="rechart2">
          <div className="average-duration little-chart"></div>
          <div className="intensity little-chart"><SimpleRadarChart/></div>
          <div className="score little-chart"><RadialChart></RadialChart></div>
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



/* <div className="UserData">
      <div className="horizontalCharts">
        <div className="rechart1">
          <p className="chart1_title">Activité quotidienne</p>
          <div className="chart1_legend">
            <div className="barLegend">
              <div className="fill1"></div>
              Poids (kg)
            </div>
            <div className="barLegend">
              <div className="fill2"></div>
              Calories brûlées (kCal)
            </div>
          </div>          
          <BarChart1/>
        </div>
        <div className="rechart2">
          <div className="average-duration little-chart"></div>
          <div className="intensity little-chart"><SimpleRadarChart/></div>
          <div className="score little-chart"><PieChartPaddingAngle/></div>
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
    </div> */