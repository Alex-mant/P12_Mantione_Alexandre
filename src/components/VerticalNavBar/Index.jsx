import "./style.scss"
import Yoga from "../../assets/Yoga.svg"
import Natation from "../../assets/Natation.svg"
import Cyclisme from "../../assets/Cyclisme.svg"
import Musculation from "../../assets/Musculation.svg"
// eslint-disable-next-line no-unused-vars
import RespTool from "../../utils/ResponsiveTools"


const VerticalNavBar = () => {
  return(
    <div className="verticalNavBar">      
      <div className="verticalNavBar_btn-container">
        {/* <RespTool/> */}
        <br/>
        <img className="vertical-filter" src={Yoga} alt="Yoga icon" />
        <img className="vertical-filter" src={Natation} alt="Natation icon" />
        <img className="vertical-filter" src={Cyclisme} alt="Cyclisme icon" />
        <img className="vertical-filter" src={Musculation} alt="Musculation icon" />       
      </div>
      <div className="copyright">Copyright, SportSee 2020</div>      
    </div>
  )
}

export default VerticalNavBar;
