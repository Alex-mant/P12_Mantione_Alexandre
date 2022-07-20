import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.svg"
import "./style.css";

/**
 * It returns a div with a className of "Header" that contains a div with a className of "header_logo"
 * that contains a Logo component and an h1 tag with the text "SportSee" and a nav with a className of
 * "header_navbar" that contains four NavLink components.
 * @returns A React component
 */

const Header = () => {

const ErrorPage = document.querySelector ('.error-container');

return(
  <>
    {
      ErrorPage === null ?
      <div className="Header">
        <div className="header_logo">
          <img src={logo} alt="logo sportsee" />
          <h1>SportSee</h1>
        </div>
        <nav className="header_navbar">
          <NavLink to="/sportSee/home/user/12" className={"header_navlink"}>Accueil</NavLink>
          <NavLink to="/sportSee/home/user/18" className={"header_navlink"}>Profil</NavLink>
          <NavLink to="#" className={"header_navlink"}>Réglage</NavLink>
          <NavLink to="#" className={"header_navlink"}>Communauté</NavLink>
        </nav>
      </div> : <div></div>
    }
  </>
)

}

export default Header;