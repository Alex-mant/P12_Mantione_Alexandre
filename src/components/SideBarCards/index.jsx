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
        <p>{data}{unit}</p>
        <p>{text}</p>
      </div>          
    </div>
  );
}

export default SideBarCard;
