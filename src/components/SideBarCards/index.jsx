import "./styles.scss";
import React from 'react';
import PropTypes from "prop-types";

/**
 * It takes in an icon, count, unit, and text, and returns a SideBarCard with a user data.
 * @memberOf SideBarCard
 * @function
 * @param {object} cardContent  - An object with 4 properties (icon, count, unit, nameOfCount) and returns a JSX element.
 * @returns {ReactElement}
 */
const SideBarCard = ({icon, count, unit, nameOfCount}) => {  
  return (
    <div className="sideBarData_Info">
      <img className="sidebar-icon-info" src={icon} alt={nameOfCount + ' icon'} />
      <div className="info">
        <p className="sideBarData_textData">{count}{unit}</p>
        <p className="sideBarData_textData2">{nameOfCount}</p>
      </div>          
    </div>
  );
}

SideBarCard.propTypes = {
  icon: PropTypes.string,
  count: PropTypes.number,
  unit: PropTypes.string,
  text: PropTypes.string
}

export default SideBarCard;
