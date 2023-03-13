import visualizerUtils from "../../utils/visualizerUtils"
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";

const colors = [
  "#2A2493", 
  "#FF00C8", 
  "#19D038",
  "#D2772B"


]
const DailyLineChart = ({ eventData , featureAnalysis}) => {
  //first filter the data by variant. ??
  //then map the filtered data so that it is by DAY or HOUR, sum together the events at that slot? 
  let variantNameMap = visualizerUtils.createVariantNameMap(featureAnalysis);
  let parsedData = visualizerUtils.parseByDay(eventData, variantNameMap);
  console.log("final parsed data: ", parsedData);
  if (!eventData || eventData.length === 0) {
    return (<h1 className='text-red-400'>Not enough event data to display history</h1>)
  } 
  return (
    <LineChart width={730} height={250} data={parsedData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time_stamp" />
      <YAxis />
      <Tooltip />
      <Legend />
      {Object.values(variantNameMap).map((varName,idx) => {
        return <Line key={varName} type="monotone" dataKey={varName} stroke={colors[idx]}/>
      })}
      {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
    </LineChart>)
}

export default DailyLineChart;