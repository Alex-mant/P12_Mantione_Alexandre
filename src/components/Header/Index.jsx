import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo";
import "./style.css";

/**
 * It returns a div with a className of "Header" that contains a div with a className of "header_logo"
 * that contains a Logo component and an h1 tag with the text "SportSee" and a nav with a className of
 * "header_navbar" that contains four NavLink components.
 * @returns A React component
 */
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