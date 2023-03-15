import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
import visualizerUtils from '../../utils/visualizerUtils';

const WeightedBarChart = ({ featureAnalysis }) => {
  const noEventsRecorded = featureAnalysis.filter(feature => feature.event_total === 0).length === featureAnalysis.length;
  console.log(featureAnalysis);
  let totalClicks = featureAnalysis.reduce((sum, currFeature) => {
    return sum + currFeature.distinct_user_events_total
  }, 0)
  let processedAnalysis = featureAnalysis.map(feature => {
    let name = feature.value
    if (feature.is_control) {
      name = name + ' (Control)'
    }
    let weightedTotal = feature.event_total * feature.weight;
    let weightedDistinct = feature.distinct_user_events_total * feature.weight;
    return {
      value: name,
      isControl: feature.is_control,
      'Total Clicks': weightedTotal,
      'Distinct Clicks': weightedDistinct,
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
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey='value' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Total Clicks">
          {processedAnalysis.map(((obj, idx) => {
            return (
              <>
                <LabelList key={`cell-${idx}-label`} dataKey='percent' position="top" />
                <Cell key={`cell-${idx}`} fill={visualizerUtils.themeColors[idx]} />
              </>
            )
          }))}
        </Bar>
        <Bar dataKey="Distinct Clicks">
          {processedAnalysis.map((obj, idx) => {
            return (
              <>
                <Cell key={`distinct-${idx}`} fill={visualizerUtils.themeColors[idx+processedAnalysis.length]}/>
                {/* <LabelList key={`cell-${idx}-label`} dataKey='percent' */}
              </>
            )
          })}
        </Bar>
      </BarChart>
    </>
  );
}


export default WeightedBarChart;
