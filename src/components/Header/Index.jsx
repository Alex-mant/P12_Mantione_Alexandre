import { NavLink } from "react-router-dom";
import "./style.css";
import Logo  from "../../assets/Logo";

const Header = () => {
return(
  <div className="Header">
    <div className="header_logo"><Logo/></div>
    <nav className="header_navbar">
      <NavLink to="/sportSee/home" className={"header_navlink"}>Accueil</NavLink>
      <NavLink to="/sportSee/profil" className={"header_navlink"}>Profil</NavLink>
      <NavLink to="/sportSee/settings" className={"header_navlink"}>Réglage</NavLink>
      <NavLink to="/sportSee/community" className={"header_navlink"}>Communauté</NavLink>
    </nav>
  </div>
)

}

export default Header;