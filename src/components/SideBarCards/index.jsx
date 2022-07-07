import "./styles.css";
import React from 'react';

/**
 * SideBarCard is a function that takes in an icon, data, unit, and text, and returns a div with the
 * icon, data, unit, and text.
 * @returns A React component.
 */
const SideBarCard = ({icon, data, unit, text}) => {
  return (
    <div className="sideBarData_Info">
      {icon}
      <div className="info">
        <p className="sideBarData_textData">{data}{unit}</p>
        <p className="sideBarData_textData2">{text}</p>
      </div>          
    </div>
  );
}

export default SideBarCard;
