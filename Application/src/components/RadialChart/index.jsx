import React, { useContext } from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import "./styles.scss"
import { DataContext } from "../../services/DataContext";

/**
 * It's a function that returns a RadialBarChart component from the react-vis library. 
 * The RadialBarChart component takes a bunch of props, including a data prop. 
 * The data prop is an array of objects. 
 * The array has one object in it. 
 * The object has a key called score. 
 * The value of the score key is a number. 
 * The number is the value of the score variable. 
 * The score variable is the value of the score key in the data object. 
 * The data object is the value of the data key in the context object. 
 * The context object is the value of the DataContext variable. 
 * The DataContext variable is the value of the DataContext key in the react-redux library.
 * @returns A React component that renders a RadialBarChart.
 */
export default function App() {
  const circleSize = 250;
  
  const {data} = useContext(DataContext);
  if (!data) return <></>;
  const score = [data]

  return (
    <>
      <h3 className="radialBarChart_title">Score</h3>
      <RadialBarChart
        className="radialBarChart"
        width={circleSize}
        height={circleSize}
        cx={circleSize / 2}
        cy={circleSize / 2}
        innerRadius={70}
        outerRadius={80}
        barSize={9}
        data={score}
        startAngle={-270}
        endAngle={90}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          background
          dataKey="score"
          cornerRadius={circleSize / 2}
          fill="red"
        />
        <text
          x={circleSize / 2}
          y={circleSize / 2 - 20}
          textAnchor="middle"
          dominantBaseline="middle"
          className="progress-label"
        >
          {score[0].score}%
        </text>
        <text 
        x={circleSize / 2} 
        y={circleSize / 2 + 5} 
        textAnchor="middle"
        dominantBaseline="middle"
        >
            de votre
        </text>
        <text 
        x={circleSize / 2} 
        y={circleSize / 2 + 25} 
        textAnchor="middle"
        dominantBaseline="middle"
        >
            objectif
        </text>
      </RadialBarChart>
    </>
  );
}