import React from "react"
import { PieChart, Pie, Sector, Cell } from "recharts"

export default class SimplePieChart extends React.Component {
  render() {
    const data = [
      { name: "Med sjukpenning", value: 685.5 },
      { name: "Utan sjukpenning", value: 13.5 }
    ]

    const COLORS =
    ["#fefe55",
      "#ff32f6",
      "#FFBB28",
      "#FF8042"]

    const RADIAN = Math.PI / 180
    const renderCustomizedLabel =
    ({
      cx, cy, midAngle, innerRadius, outerRadius, percent, index
    }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5
      const x  = cx + radius * Math.cos(-midAngle * RADIAN)
      const y = cy  + radius * Math.sin(-midAngle * RADIAN)
      return (
        <text
          x={x}
          y={y}
          fill="black"
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      )
    }
    return (
      <div>
        <PieChart
          width={400}
          height={400}
          onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            cx={300}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8">
            {
              data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
            }
          </Pie>
        </PieChart>
      </div>
    )
  }
}
