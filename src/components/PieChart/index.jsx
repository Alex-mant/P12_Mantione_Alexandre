import React, { PureComponent } from 'react';
import { PieChart,Pie,Cell } from 'recharts';

const data = [
  { name: 'Group A', value: 20 },
  { name: 'Group B', value: 29 }
];
const COLORS = ['#FF0101', '#fff'];

export default class PieChartPaddingAngle extends PureComponent {
  render() {
    return (
      <PieChart className='scorePieChart' width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={120}
          cy={120}
          innerRadius={60}
          outerRadius={80}
          fill="#fff"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
