import visualizerUtils from "../../utils/visualizerUtils"
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, Label } from "recharts";


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
    <LineChart width={700} height={300} data={parsedData} className='linechart'
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date"/>
      <YAxis label={{value: 'Events', angle: -90, position:'left'}}/>
      <Tooltip />
      <Legend />
      {Object.values(variantNameMap).map((varName,idx) => {
        return <Line key={`line-${idx}`} type="monotone" dataKey={varName} stroke={visualizerUtils.themeColors[idx]} strokeWidth={2}/>
      })}
    </LineChart>)
}

export default DailyLineChart;