import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo";
import "./style.css";


const Header = () => {
return(
  <div className="Header">
    <div className="header_logo">
      <Logo/>
      <h1>SportSee</h1>
    </div>
    <nav className="header_navbar">
      <NavLink to="/sportSee/home" className={"header_navlink"}>Accueil</NavLink>
      <NavLink to="/sportSee/home" className={"header_navlink"}>Profil</NavLink>
      <NavLink to="/sportSee/home" className={"header_navlink"}>Réglage</NavLink>
      <NavLink to="/sportSee/home" className={"header_navlink"}>Communauté</NavLink>
    </nav>
  </div>
)

}

export default Header;