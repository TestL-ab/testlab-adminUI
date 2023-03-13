import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
import visualizerUtils from '../../utils/visualizerUtils';

const SimpleBarChart = ({featureAnalysis}) => {
  const noEventsRecorded = featureAnalysis.filter(feature => feature.event_total === 0).length === featureAnalysis.length;
  console.log(featureAnalysis);
  let totalClicks = featureAnalysis.reduce((sum, currFeature) => {
    return sum + currFeature.event_total
  }, 0)
  let processedAnalysis = featureAnalysis.map(feature => {
    let name = feature.value
    if (feature.is_control) {
      name = name + ' (Control)'
    }
    return {
      value: name, 
      isControl: feature.is_control,
      'Clicks Received': feature.event_total, 
      percent: `${(feature.event_total / totalClicks * 100).toFixed(1)}%`
    }
  })

  if (featureAnalysis.length === 0 || noEventsRecorded) {
    return (<h1 className='text-red-400'>Not enough event data to display comparison</h1>)
  }
  
  return (
    <>
      <BarChart
      width={500}
      height={300}
      data={processedAnalysis}
      margin={{
        top:5, 
        right: 30, 
        left: 20,
        bottom: 5,
      }}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey='value'/>
        <YAxis />
        <Tooltip/>
        <Legend />
        {/* <Bar dataKey='Clicks Received' fill="#8884d8">
          <LabelList dataKey='percent' position="top"/>
        </Bar> */}
        <Bar dataKey="Clicks Received">
          {processedAnalysis.map(((obj,idx) => {
            return <Cell key={`cell-${idx}`} fill={visualizerUtils.themeColors[idx]} />
          }))}
        </Bar>
{/* this could be how  */}
        {/* <Bar dataKey="value">
    {
      data.map((entry, index) => (
        <Cell key={`cell-${index}`} stroke={colors[index]}  strokeWidth={index === 2 ? 4 : 1}/>
      ))
    }
  </Bar> */}
      </BarChart>
      </>
  );
}


export default SimpleBarChart;
