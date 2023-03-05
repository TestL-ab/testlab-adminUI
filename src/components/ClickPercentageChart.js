import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const parseValue = (value) => {
  let words = value.split("_");
  words = words.map((word) => {
    const firstChar = word[0].toUpperCase();
    const remainingChars = word.slice(1);
    return firstChar + remainingChars;
  });
  return words.join(' ');
}
// {
//   id: 24,
//   value: "not_ryan",
//   is_control: true,
//   weight: .5,
//   total_users: 100,
//   click_total: 100,
//   distinct_user_click_total: 50,
// }

const UserPercentageChart = ({clickData}) => {
  const RADIAN = Math.PI / 180;
  const COLORS = ["#82ca9d", "#8884d8"];

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const processedData = clickData.map((variantObj) => {
    return {
      variantName: parseValue(variantObj.value),
      data: [
      {
        name: "Users who did not click.",
        value: variantObj.total_users - variantObj.distinct_user_click_total,
      },
      {
        name: "Users who clicked.",
        value: variantObj.distinct_user_click_total,
      }
    ]}
  });

  return (
    <React.Fragment>
      <h1>User Click Percentages by Variant</h1>
    {processedData.map((dataObj) => {
      return (
        <React.Fragment key={dataObj.variantName}>
       <h2>{dataObj.variantName}</h2>
        <PieChart width={400} height={400}>
          <Pie
            data={dataObj.data}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {dataObj.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </React.Fragment>
      );
    })}
    </React.Fragment>
  )
};

export default UserPercentageChart;