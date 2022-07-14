// import React, { useContext } from "react"
import HomeMain from "../components/HomeMain/Index";
import VerticalNavBar from "../components/VerticalNavBar/Index";
// import { DataContext } from "../context/DataContext";


const Home = () => {
  // const {data} = useContext(DataContext);
  return (
    <>
      <div className="HomeDisplay">
        <VerticalNavBar/>
        <HomeMain userFirstName={'currentUser'}/>
      </div>
    </>
  )
}

export default Home;