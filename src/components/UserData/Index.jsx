import { BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend } from "recharts";
import CaloriesIcon from "../../assets/Calories-icon";
import GlucidesIcon from "../../assets/Glucides-icon";
import LipidesIcon from "../../assets/Lipides-icon";
import ProteinesIcon from "../../assets/Proteines-icon";
import PieChartPaddingAngle from "../PieChart/index";
import SimpleRadarChart from "../SimpleRadarChart/index";
import "./style.css"

const UserData = ({data}) => {
  return(
    <div className="UserData">
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
          <BarChart className="chart_dayActivity" width={835} height={210} data={data}>
            <CartesianGrid strokeDasharray="7 7" />
            <XAxis />
            <YAxis />
            <Tooltip />
            <Legend />
          </BarChart>
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
    </div>
  )
}

export default UserData;
