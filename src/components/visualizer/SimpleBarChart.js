import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
import visualizerUtils from '../../utils/visualizerUtils';

const SimpleBarChart = ({ featureAnalysis }) => {
  const noEventsRecorded = featureAnalysis.filter(feature => feature.event_total === 0).length === featureAnalysis.length;
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
      'Total Events': feature.event_total-feature.distinct_user_events_total,
      'Distinct Events': feature.distinct_user_events_total,
      percent: `${(feature.event_total / totalClicks * 100).toFixed(1)}%`
    }
  })

  if (featureAnalysis.length === 0 || noEventsRecorded) {
    return (<h1 className='text-red-400'>Not enough event data to display comparison</h1>)
  }

  return (
    <>
      <BarChart className='simple-barchart'
        width={500}
        height={400}
        data={processedAnalysis}
        margin={{
          top: 10,
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

        <Bar dataKey="Total Events"  fill={visualizerUtils.themeColors[0]} stackId="a">
          {processedAnalysis.map(((obj, idx) => {
            return (
              <>
                <LabelList key={`cell-${idx}-label`} dataKey='percent' position="top" />
                <Cell key={`cell-${idx}`} />
              </>
            )
          }))}
        </Bar>
        <Bar dataKey="Distinct Events" stackId="a" fill={visualizerUtils.themeColors[1]}>
          {processedAnalysis.map((obj, idx) => {
            return (
              <>
                <Cell key={`distinct-${idx}`} />
                {/* <LabelList key={`cell-${idx}-label`} dataKey='percent' */}
              </>
            )
          })}
        </Bar>
      </BarChart>
    </>
  );
}


export default SimpleBarChart;
