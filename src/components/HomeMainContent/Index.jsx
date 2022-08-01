import DisplayCharts from "../DisplayCharts";
import SideBar from "../SideBar";
import "./style.scss"
// eslint-disable-next-line no-unused-vars
import SideDevTools from "../../utils/SideDevTools";


/**
 * UserData is a function that returns a div with two child components, Charts and SideBar.
 * @returns The UserData component is being returned.
 */
const HomeMainContent = () => {
  return(
    <div className="UserData">
      <DisplayCharts/> 
      <SideBar/>
      <SideDevTools/>
    </div>
  )
}

export default HomeMainContent;
