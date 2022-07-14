import "./styles.css";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
;

const data = [
    {
        name: "1",
        uv: 69.2,
        pv: 70,
        amt: 2400,
    },
    {
        name: "2",
        uv: 70.2,
        pv: 70.4,
        amt: 2210,
    },
    {
        name: "3",
        uv: 70.6,
        pv: 70.4,
        amt: 2290,
    },
    {
        name: "4",
        uv: 70.4,
        pv: 70.4,
        amt: 2000,
    },
    {
        name: "5",
        uv: 70.8,
        pv: 70.8,
        amt: 2181,
    },
    {
        name: "6",
        uv: 70.4,
        pv: 70.4,
        amt: 2000,
    },
    {
        name: "7",
        uv: 70.8,
        pv: 70.8,
        amt: 2181,
    },
];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      payload[0].chartType = "AreaChart";
      return (
        <div className="custom-tooltip">
          <p className="label">{payload[0].value + "kg"}</p>
          <p className="label">{payload[1].value + "kCal"}</p>
        </div>
      );
    }

    return null;
};


const SimpleBarChart = () => {

    return (
        <>
            <div className="chart-titleXchart-legend">
                <h3 className="chart-title">Activité quotidienne</h3>
                <div className="chart-legend">
                    <div className="legend-textXdot">
                        <div className="dot black"></div>Poids (kg)
                    </div>
                    <div className="legend-textXdot">
                        <div className="dot red"></div>Calories brûlées (kCal)
                    </div>
                </div>
            </div>
            <ResponsiveContainer  width="100%" aspect={3}>
                <BarChart
                    className="barchart"
                    width={746.5}
                    height={196}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 50,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid horizontal={true} vertical={false} strokeDasharray="3 3" />
                    <XAxis
                        dataKey="name"
                        tickSize={15}
                        tickLine={false}
                        padding={{ left: -40, right: -41.95 }}
                    />
                    <YAxis tickSize={45} orientation="right" domain={[69, 71]} tickCount={3} stroke={""} />
                    <Tooltip  content={CustomTooltip} />
                    <Bar barSize={7} dataKey="pv" fill="black" radius={[3, 3, 0, 0]} />
                    <Bar barSize={7} dataKey="uv" fill="red" radius={[3, 3, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </>
    );
};

export default SimpleBarChart;
