import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '18-24',
    uv: 6.64,
    pv: 4800,
    fill: '#8884d8',
  }
];

/**
 *This class is a React component that renders a RadialBarChart using the data of user from SportSee's API. 
 */
class RadialChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="70%" barSize={10} data={data}>
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="uv"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }
}

export default RadialChart;