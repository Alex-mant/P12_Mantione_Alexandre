import { Outlet } from "react-router-dom";
import HomeMain from "../components/HomeMain/Index";
import VerticalNavBar from "../components/VerticalNavBar/Index";

const Home = () => {
 
  return (
    <div className="HomeDisplay">
      <VerticalNavBar/>
      <HomeMain/>
      <Outlet/>
    </div>
  )
}

export default Home;