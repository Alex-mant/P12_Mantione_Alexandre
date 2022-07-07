import React from 'react';
import TinyLineChart from '../LineChart';
import SimpleBarChart from '../SimpleBarChart';
import NormalPieChart from "../RadialChart";
import SimpleRadarChart from '../SimpleRadarChart';
import "./styles.css"

/**
 * The Charts function returns a div with two child divs, the first of which contains a SimpleBarChart
 * component, and the second of which contains three child divs, each of which contains a different
 * component.
 * @returns A div with className "horizontalCharts" and three divs inside it.
 */
const Charts = () => {
  return (
      <div className="horizontalCharts">
        <div className="rechart1"><SimpleBarChart/></div>
        <div className="rechart2">
          <div className="average-duration little-chart"><TinyLineChart/></div>
          <div className="intensity little-chart"><SimpleRadarChart/></div>
          <div className="score little-chart"><NormalPieChart/></div>
        </div>
      </div> 
  );
}

export default Charts;
