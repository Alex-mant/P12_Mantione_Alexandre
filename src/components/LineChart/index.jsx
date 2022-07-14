import React from 'react';
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import "./styles.css"

const data = [
  {
    name: 'L',
    uv: 4000,
    pv: 24,
    amt: 2400,
  },
  {
    name: 'M',
    uv: 3000,
    pv: 13,
    amt: 2210,
  },
  {
    name: 'M',
    uv: 2000,
    pv: 98,
    amt: 2290,
  },
  {
    name: 'J',
    uv: 2780,
    pv: 39,
    amt: 2000,
  },
  {
    name: 'V',
    uv: 1890,
    pv: 48,
    amt: 2181,
  },
  {
    name: 'S',
    uv: 2390,
    pv: 38,
    amt: 2500,
  },
  {
    name: 'D',
    uv: 3490,
    pv: 43,
    amt: 2100,
  }
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    payload[0].chartType = "AreaChart";
    return (
      <div className="custom-tooltip">
        <p className="user-number">
          {payload[0].payload.number}
        </p>
        <p className="label">{payload[0].value + " min"}</p>
      </div>
    );
  }

  return null;
};

 const TinyLineChart = () => {
 
    return (
      <>
      <h3 className='linechart_title'>Durée moyenne des sessions</h3>
      <ResponsiveContainer  width={"100%"} height={126}>
        <LineChart name="linechart" className={"lineChart"} width={300} height={100} data={data} onMouseMove={(e) => {
          let filter = document.querySelector(".little-chart");
          if(e.isTooltipActive){
            let windowWidth = filter.clientWidth;
            let mouseXpercentage = Math.round((e.activeCoordinate.x/windowWidth)*100);
            filter.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`;
          }else{
            filter.style.background = 'red'
          }
        }}>
          <XAxis padding={{left:15,right:15}} stroke="transparent" tickSize={20} tickLine={false} interval={0} dataKey="name"/>
          <Line dot={false} activeDot={{ r: 4 }} type="natural" dataKey={"pv"} stroke="white" strokeWidth={2} />
          <Tooltip  content={<CustomTooltip />} cursor={false} filterNull={false} />
        </LineChart>
      </ResponsiveContainer>
      </>
    );

}

export default TinyLineChart;