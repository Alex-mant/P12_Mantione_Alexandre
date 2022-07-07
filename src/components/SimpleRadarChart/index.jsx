import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Layer } from 'recharts';
import "./style.css"

const data = [
  {
    subject: 'Intensité',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Vitesse',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Force',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Endurance',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Energie',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Cardio',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];


export default class SimpleRadarChart extends PureComponent {

  

  render() {
    return (
      <ResponsiveContainer className="intensity-chart" width="100%" height="100%">
        <RadarChart className='radarChart' cx="50%" cy="50%" outerRadius="80%" data={data}>
          <Layer color='#fff'/>
          <PolarGrid />
          <PolarAngleAxis  dataKey="subject" />
          <Radar name="intensity" dataKey="A" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
