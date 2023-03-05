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
// {
//   id: 23,            // variant id, not experiment id
//   value: "ryan",
//   is_control: false,
//   weight: .5,
//   total_users: 10000,
//   click_total: 4000, // mathy stuff to get click total from events table
//   distinct_user_click_total: 400000000000000 // more mathy stuff to get click total where USER ID is distinct from events table
// },

const Graph = ({ clickData }) => {
  const processedData = clickData.map((variantObj) => {
    return {
      name: variantObj.value,
      userClicks: variantObj.distinct_user_click_total,
      totalClicks: variantObj.click_total,
    }
  });
  console.log("graph data: ", processedData);

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
        <Bar dataKey="totalClicks" fill="#82ca9d" />
        <Bar dataKey="userClicks" fill="#8884d8" />
      </BarChart>
    </React.Fragment>
  );
}

export default Graph;