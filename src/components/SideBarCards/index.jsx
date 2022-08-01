import "./styles.scss";
import React from 'react';
import PropTypes from "prop-types";

/**
 * It takes in an icon, count, unit, and text, and returns a SideBarCard with a user data.
 * @memberOf SideBarCard
 * @function
 * @param {object} cardContent  - An object with 4 properties (pathIcon, iCount, strUnit, strNameOfCount) and returns a JSX element.
 * @returns {ReactElement}
 */
const SideBarCard = (cardContent) => {
  const {pathIcon, iCount, strUnit, strNameOfCount} = cardContent
  return (
    <div className="sideBarData_Info">
      <img className="sidebar-icon-info" src={pathIcon} alt={strNameOfCount + ' icon'} />
      <div className="info">
        <p className="sideBarData_textData">{iCount}{strUnit}</p>
        <p className="sideBarData_textData2">{strNameOfCount}</p>
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
