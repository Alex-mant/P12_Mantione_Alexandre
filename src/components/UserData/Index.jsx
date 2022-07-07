import Charts from "../Charts";
import SideBar from "../SideBar";
import "./style.css"


/**
 * UserData is a function that returns a div with two child components, Charts and SideBar.
 * @returns The UserData component is being returned.
 */
const UserData = () => {
  return(
    <div className="UserData">
      <Charts/> 
      <SideBar/>
    </div>
  )
}

export default UserData;
