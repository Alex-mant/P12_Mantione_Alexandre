import "./styles.css";
import React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import "./styles.css"

const data = [{ name: "L1", value: 12 }];

const circleSize = 250;

export default function App() {
  return (
    <RadialBarChart
      width={circleSize}
      height={circleSize}
      cx={circleSize / 2}
      cy={circleSize / 2}
      innerRadius={70}
      outerRadius={80}
      barSize={9}
      data={data}
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
        dataKey="value"
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
        {data[0].value}%
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
  );
}