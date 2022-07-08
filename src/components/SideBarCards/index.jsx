import "./styles.css";
import React from 'react';
import PropTypes from "prop-types";


/**
 * It takes in an icon, count, unit, and text, and returns a SideBarCard with a user data.
 * @returns A React Component
 * @param {variable} icon  - variable of import files // example : import icon from './assets/myIcon.svg
 * @param {object}  count - Data value 
 * @param {string}  unit  - Unit of data value (kCal, g)
 * @param {string}  text - Type of value (Proteines, Glucides, Lipides, Calories)
 */
const SideBarCard = ({icon, count, unit, text}) => {
  return (
    <div className="sideBarData_Info">
      <img className="sidebar-icon-info" src={icon} alt={text + ' icon'} />
      <div className="info">
        <p className="sideBarData_textData">{count}{unit}</p>
        <p className="sideBarData_textData2">{text}</p>
      </div>          
    </div>
  );
}

SideBarCard.propTypes = {
  icon: PropTypes.element,
  count: PropTypes.string,
  unit: PropTypes.string,
  text: PropTypes.string
}

export default SideBarCard;
