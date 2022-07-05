import { BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend } from "recharts";

const BarChart1 = ({data}) => {

  return(
    <BarChart className="chart_dayActivity" width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis />
      <YAxis />
      <Tooltip/>
      <Legend />
    </BarChart>
  )
}

export default BarChart1;
