import visualizerUtils from "../../utils/visualizerUtils"
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";

const DailyLineChart = ({ eventData }) => {
  //first filter the data by variant. ??
  //then map the filtered data so that it is by DAY or HOUR, sum together the events at that slot? 
  let parsedData = visualizerUtils.parseByDay(eventData);

  console.log(parsedData);
  return (
    <LineChart width={730} height={250} data={parsedData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time_stamp" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>)
}

export default DailyLineChart;