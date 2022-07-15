import React from 'react';
import { useContext } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Layer } from 'recharts';
import { DataContext } from '../../context/DataContext';
import "./style.css"

export default function SimpleRadarChart () {
  const {data} = useContext(DataContext);
       
  let kind = data?.performance.kind;

  /* A ternary operator. if kind Object value is undefined else transform kind object to array with only values of this object */
  kind === undefined ? <h1>Loading...</h1> : kind = Object.values(kind);

  /**
   * It takes a number and returns a string
   * @param {number} iKind
   * @returns {Array} arrKind - The value of arrKind[iKind] if it exists, otherwise an empty string.
   */
  const iKindToStrKind = (iKind) => {
    return kind[iKind] || '';
  }

  let dataPerformance = data?.performance.data;
 /* A ternary operator. If dataPerformance is undefined, it returns undefined, otherwise it returns new value of kind object with iKindToStrKind function*/
  dataPerformance = dataPerformance?.map(({value, kind}) => {
    return {value , kind: iKindToStrKind(kind-1)}
  })

  return (
    <>{kind === undefined ? <h1>Loading...</h1> : 
      <ResponsiveContainer className="performance-chart" width="100%" height="100%">
        <RadarChart className='radarChart' cx="48%" cy="50%" outerRadius="70%" data={dataPerformance}>
          <Layer color='#fff'/>
          <PolarGrid />
          <PolarAngleAxis  dataKey="kind" />
          <Radar name="intensity" dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    }</>
  );

}
