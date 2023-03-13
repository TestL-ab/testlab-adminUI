import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SimpleBarChart = ({featureAnalysis}) => {
  const noEventsRecorded = featureAnalysis.filter(feature => feature.event_total === 0).length === featureAnalysis.length;
//   [
//     {
//         "id": 6,
//         "value": "v1",
//         "is_control": true,
//         "weight": "0.15",
//         "event_total": 0,
//         "distinct_user_events_total": 0,
//         "total_users": 0
//     },
//     {
//         "id": 7,
//         "value": "v2",
//         "is_control": false,
//         "weight": "0.8",
//         "event_total": 0,
//         "distinct_user_events_total": 0,
//         "total_users": 0
//     },
//     {
//         "id": 8,
//         "value": "v3",
//         "is_control": false,
//         "weight": "0.05",
//         "event_total": 0,
//         "distinct_user_events_total": 0,
//         "total_users": 0
//     }
// ]
  let processedAnalysis = featureAnalysis.map(feature => {
    console.log(feature);
    let name = feature.value
    if (feature.is_control) {
      name = name + ' (Control)'
    }
    return {
      value: name, 
      isControl: feature.is_control,
      'Clicks Received': feature.event_total
    }
  })

  if (featureAnalysis.length === 0 || noEventsRecorded) {
    return (<h1>Not enough event data to display comparison</h1>)
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
        <Bar dataKey='Clicks Received' fill="#8884d8"/>

      </BarChart>
      </>
  );
}


export default SimpleBarChart;
