import React from 'react';
import { useContext } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Layer } from 'recharts';
import { DataContext } from '../../services/DataContext';
import "./style.scss"

export default function SimpleRadarChart () {
  const {data} = useContext(DataContext);
  if (!data) return <></>;
  const {formatPerformance} = data;
  
  return (
    <>
      <ResponsiveContainer className="performance-chart" width="100%" height="100%">
        <RadarChart className='radarChart' cx="48%" cy="50%" outerRadius={80} data={formatPerformance}>
          <Layer color='#fff'/>
          <PolarGrid />
          <PolarAngleAxis  dataKey="kind" />
          <Radar name="intensity" dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );

}
