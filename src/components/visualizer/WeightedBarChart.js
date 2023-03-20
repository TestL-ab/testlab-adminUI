import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
import visualizerUtils from '../../utils/visualizerUtils';
import HoverInfo from './HoverInfo';
import { BeakerIcon } from '@heroicons/react/24/outline';

const WeightedBarChart = ({ featureAnalysis }) => {
  const noEventsRecorded = featureAnalysis.filter(feature => feature.event_total === 0).length === featureAnalysis.length;
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
      'Total Events': weightedTotal-weightedDistinct,
      'Distinct Events': weightedDistinct,
      percent: `${(feature.event_total / totalClicks * 100).toFixed(1)}%`
    }
  })

  if (featureAnalysis.length === 0 || noEventsRecorded) {
    return (<h1 className='text-red-400'>Not enough event data to display comparison</h1>)
  }

  return (
    <>
      <BarChart className='weighted-barchart'
        width={650}
        height={350}
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
        <Bar dataKey="Distinct Events" stackId="a" fill={visualizerUtils.themeColors[1]} fillOpacity={1} >
          {processedAnalysis.map((obj, idx) => {
            return (
              // <>
                <Cell key={`distinct-${idx}`} stroke={visualizerUtils.themeColors[0]} strokeWidth={2}/>
                // {/* <LabelList key={`cell-${idx}-label`} dataKey='percent' */}
              // </>
            )
          })}
        </Bar>
        <Bar dataKey="Total Events" stackId="a" fill={visualizerUtils.themeColors[0]}>
          {processedAnalysis.map((obj, idx) => {
            return (
              // <>
                // <LabelList key={`cell-${idx}-label`} dataKey='percent' position="top" /> 
                <Cell key={`cell-${idx}`}  stroke={visualizerUtils.themeColors[0]} strokeWidth={2}/>
              // </>
            )
          })}
        </Bar>
        
      </BarChart>
    </>
  );
}


export default WeightedBarChart;
