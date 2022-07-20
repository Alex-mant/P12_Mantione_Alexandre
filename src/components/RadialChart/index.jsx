import "./styles.css";
import React, { useContext } from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import "./styles.css"
import { DataContext } from "../../context/DataContext";

const circleSize = 250;

export default function App() {

  const {data: allData} = useContext(DataContext);
  
  let data;
  if(allData?.mainData.score !== undefined){    
    data = [
      {
        score : allData?.mainData.score*100
      }
    ]  
  }else if (allData?.mainData.todayScore !== undefined){    
    data = [
      {
        score : allData?.mainData.todayScore*100
      }
    ]    
  }

  return (
    <>{ allData === undefined ? <h1>Loading...</h1> :
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
            {data[0].score}%
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
  }</>
  );
}