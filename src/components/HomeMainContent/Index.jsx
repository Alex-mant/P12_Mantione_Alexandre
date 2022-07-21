import DisplayCharts from "../DisplayCharts";
import SideBar from "../SideBar";
// import SideDevTools from "../SideDevTools/index";
import "./style.scss"


/**
 * UserData is a function that returns a div with two child components, Charts and SideBar.
 * @returns The UserData component is being returned.
 */
const HomeMainContent = () => {
  return(
    <div className="UserData">
      <DisplayCharts/> 
      <SideBar/>
      {/* <SideDevTools/> */}
    </div>
  )
}

export default HomeMainContent;
