import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Layer } from 'recharts';
import { DataContext } from '../../context/DataContext';
import "./style.css"

// const data = [
//   {
//     kind: 'Intensité',
//     value: 120,
//   }
// ];



export default function SimpleRadarChart () {
  const {data} = useContext(DataContext);
       
  const kind = data?.performance.kind;
  let arrKind;
  kind === undefined ? <h1>Loading...</h1> : arrKind = Object.values(kind);

  const iKindToStrKind = (iKind) => {
    return arrKind[iKind] || '';
  }

  let dataPerformance = data?.performance.data;
  dataPerformance = dataPerformance?.map(({value, kind}) => {
    return {value: value , kind: iKindToStrKind(kind-1)}
  })

  return (
    <ResponsiveContainer className="intensity-chart" width="100%" height="100%">
      <RadarChart className='radarChart' cx="48%" cy="50%" outerRadius="70%" data={dataPerformance}>
        <Layer color='#fff'/>
        <PolarGrid />
        <PolarAngleAxis  dataKey="kind" />
        <Radar name="intensity" dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );

}
