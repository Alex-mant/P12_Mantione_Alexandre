import React, { useContext } from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import "./styles.scss"
import { DataContext } from "../../services/DataContext";
import UserData from "../../model/UserData";

export default function App() {
  const circleSize = 250;
  
  const {data} = useContext(DataContext);
  if (data === undefined) return <></>;
  const score = [new UserData(data)]

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