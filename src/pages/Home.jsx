import React from "react"
import HomeMain from "../components/HomeMain/Index";
import VerticalNavBar from "../components/VerticalNavBar/Index";

const Home = () => {
  return (
    <>
      <div className="HomeDisplay">
        <VerticalNavBar/>
        <HomeMain userName={"Thomas"}/>
      </div>
    </>
  )
}

export default Home;