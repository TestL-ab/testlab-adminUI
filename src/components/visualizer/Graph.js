import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const parseValue = (value) => {
  let words = value.split("_");
  words = words.map((word) => {
    const firstChar = word[0].toUpperCase();
    const remainingChars = word.slice(1);
    return firstChar + remainingChars;
  });
  return words.join(' ');
}

const Graph = ({ clickData }) => {
  console.log(clickData);
  const processedData = clickData.map((variantObj) => {
    return {
      name: parseValue(variantObj.value),
      "Distinct User Clicks": variantObj.distinct_user_events_total,
      "Total Clicks": variantObj.event_total,
    }
  });
  console.log("processedData: ", processedData);
  if (processedData.length === 0 ) {
    return <h1>No click data exists to create graph.</h1>
  }

  return (
    <React.Fragment>
      <h1>Raw Click Data:</h1>
      <BarChart
        width={500}
        height={300}
        data={processedData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Total Clicks" fill="#82ca9d" />
        <Bar dataKey="Distinct User Clicks" fill="#8884d8" />
      </BarChart>
    </React.Fragment>
  );
}

export default Graph;