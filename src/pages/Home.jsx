import React from "react"
import Main from "../components/HomeMain/Index";
import VerticalNavBar from "../components/VerticalNavBar/Index";

const Home = () => {
  return (
    <>
      <div className="HomeDisplay">
        <VerticalNavBar/>
        <Main/>
      </div>
    </>
  )
}

export default Home;