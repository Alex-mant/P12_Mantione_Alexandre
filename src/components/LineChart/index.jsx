import React, { PureComponent } from 'react';
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import "./styles.css"

const data = [
  {
    name: 'L',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'M',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'M',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'J',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'V',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'S',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'D',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class TinyLineChart extends PureComponent {

  render() {
    return (
      <>
      <h3 className='linechart_title'>Durée moyenne des sessions</h3>
      <ResponsiveContainer  width={258} height={126}>
        <LineChart className={"lineChart"} width={300} height={100} data={data}>
          <Line dot={false} activeDot={{ r: 4 }} type="natural" dataKey="pv" stroke="white" strokeWidth={2} />
          <XAxis padding={{left:15,right:15}} stroke="" tickSize={20} tickLine={false} interval={0} dataKey={"name"}/>
          <Tooltip cursor={false} payload={[{value:"pv"}]} />
        </LineChart>
      </ResponsiveContainer>
      </>
    );
  }
}
