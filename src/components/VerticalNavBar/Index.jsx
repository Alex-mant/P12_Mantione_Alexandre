import Btn1 from "../../assets/Btn1";
import Btn2 from "../../assets/Btn2";
import Btn3 from "../../assets/Btn3";
import Btn4 from "../../assets/Btn4";
import "./style.css"

const VerticalNavBar = () => {
  return(
    <div className="verticalNavBar">
      <div className="verticalNavBar_btn-container">
        <Btn1/>
        <Btn2/>
        <Btn3/>
        <Btn4/>
      </div>
      <div className="copyright">Copyright, SportSee 2020</div>
    </div>
  )
}

export default VerticalNavBar;
