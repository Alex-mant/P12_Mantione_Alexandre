import React, { useContext } from 'react';
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { DataContext } from '../../context/DataContext';
import "./styles.css"
// keys : Name: L, uv:4000, pv:32, amt:2400

const dayOfTheWeek = (day) => {
  return [ "L", "M", "M", "J", "V", "S", "D"][day] || ''
}

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

  const {data} = useContext(DataContext);
  let sessions = data?.sessions.sessions
  sessions = sessions?.map(({day, sessionLength}) => {
    return {sessionLength, day: day = dayOfTheWeek(day-1)}
  })
 
    return (
      <>
      <h3 className='linechart_title'>Durée moyenne des sessions</h3>
      <ResponsiveContainer  width={"100%"} height={126}>
        <LineChart name="linechart" className={"lineChart"} width={300} height={100} data={sessions} onMouseMove={(e) => {
          let filter = document.querySelector(".little-chart");
          if(e.isTooltipActive){
            let windowWidth = filter.clientWidth;
            let mouseXpercentage = Math.round((e.activeCoordinate.x/windowWidth)*100);
            filter.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`;
          }else{
            filter.style.background = 'red'
          }
        }}>
          <XAxis padding={{left:15,right:15}} stroke="transparent" tickSize={25} tickLine={false} interval={0} dataKey="day"/>
          <Line dot={false} activeDot={{ r: 4 }} type="natural" dataKey={"sessionLength"} stroke="white" strokeWidth={2} />
          <Tooltip  content={<CustomTooltip />} cursor={false} filterNull={false} />
        </LineChart>
      </ResponsiveContainer>
      </>
    );

}

export default TinyLineChart;