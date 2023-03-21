import visualizerUtils from "../../utils/visualizerUtils"
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, Label } from "recharts";


const DailyLineChart = ({ eventData , featureAnalysis}) => {
  let variantNameMap = visualizerUtils.createVariantNameMap(featureAnalysis);
  let parsedData = visualizerUtils.parseByDay(eventData, variantNameMap);
  if (!eventData || eventData.length === 0) {
    return (<h1 className='text-red-400'>Not enough event data to display history</h1>)
  } 
  return (
    <LineChart width={650} height={350} data={parsedData} className='linechart'
      margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis label={{value: 'Events', angle: -90, position:'left'}}/>
      <Tooltip />
      <Legend verticalAlign="top" height={36}/>
      {Object.values(variantNameMap).map((varName,idx) => {
        return <Line connectNulls key={`line-${idx}`} type="monotone" dataKey={varName} stroke={visualizerUtils.themeColors[idx]} strokeWidth={2}/>
      })}
    </LineChart>)
}

export default DailyLineChart;