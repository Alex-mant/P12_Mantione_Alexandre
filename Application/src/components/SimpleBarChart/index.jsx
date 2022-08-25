import "./styles.scss";
import React, { useContext } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { DataContext } from "../../services/DataContext";

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


/**
 * It's a function that returns a Simple Bar Chart using the data from the context.
 * @returns A React component that renders a SimpleBarChart.
 */
const SimpleBarChart = () => {
    
    const {data} = useContext(DataContext);
    const formatActivity = data?.formatActivity;

    return (
        <>{ !formatActivity  ? <h1 className="loader-title">Loading...</h1> :
            <>
                <ResponsiveContainer  width="100%" aspect={3}>
                    <BarChart
                        className="barchart"
                        width={746.5}
                        height={196}
                        data={formatActivity}
                        margin={{
                            top: 50,
                            right: 30,
                            left: 50,
                            bottom: -20,
                        }}
                    >
                        <text className="chart-title" x={50} y={10}>Activité quotidienne</text>
                        <Legend
                            wrapperStyle={{ top: -10, left: "30%" }}
                            iconType="circle"
                            iconSize={10}
                            formatter={(name) => {
                                return <span style={{ color: "#74798C" }}>{name}</span>;
                            }}
                        />
                        <CartesianGrid horizontal={true} vertical={false} strokeDasharray="3 3" />
                        <XAxis
                            dataKey="day"
                            tickSize={10}
                            tickLine={false}
                            padding={{ left: -44, right: -44 }}
                        />
                        <YAxis tickSize={24} yAxisId="kilogram" domain={["dataMin -1","dataMax +2"]} orientation="right"  tickCount={3} stroke={''} />
                        <YAxis yAxisId="calories" hide />
                        <Tooltip content={CustomTooltip} />
                        <Bar name="Poids (kg)" barSize={7} dataKey="kilogram" yAxisId="kilogram" fill="black" radius={[3, 3, 0, 0]} />
                        <Bar name="Calories brûlées (kCal)"  barSize={7} dataKey="calories" yAxisId="calories" fill="red" radius={[3, 3, 0, 0]}/>
                    </BarChart>
                </ResponsiveContainer>
            </>
        }</>
    );
};

export default SimpleBarChart;
