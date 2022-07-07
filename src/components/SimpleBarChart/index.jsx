import "./styles.css";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const SimpleBarChart = () => {
    const data = [
        {
            name: "Page A",
            uv: 69.2,
            pv: 70,
            amt: 2400,
        },
        {
            name: "Page B",
            uv: 70.2,
            pv: 70.4,
            amt: 2210,
        },
        {
            name: "Page C",
            uv: 70.6,
            pv: 70.4,
            amt: 2290,
        },
        {
            name: "Page D",
            uv: 70.4,
            pv: 70.4,
            amt: 2000,
        },
        {
            name: "Page E",
            uv: 70.8,
            pv: 70.8,
            amt: 2181,
        },
        {
            name: "Page D",
            uv: 70.4,
            pv: 70.4,
            amt: 2000,
        },
        {
            name: "Page E",
            uv: 70.8,
            pv: 70.8,
            amt: 2181,
        },
    ];

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
            <BarChart
                className="barchart"
                width={746.5}
                height={196}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid horizontal={true} vertical={false} strokeDasharray="3" />
                <XAxis
                    tickSize={15}
                    tickLine={false}
                    scale={"point"}
                    padding={{ left: 9.5, right: 8.5 }}
                />
                <YAxis tickSize={45} orientation="right" domain={[69, 71]} tickCount={3} stroke={""} />
                <Tooltip />
                <Bar barSize={7} dataKey="pv" fill="black" radius={[3, 3, 0, 0]} />
                <Bar barSize={7} dataKey="uv" fill="red" radius={[3, 3, 0, 0]} />
            </BarChart>
        </>
    );
};

export default SimpleBarChart;
