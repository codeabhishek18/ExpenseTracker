import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import styles from './PieChart.module.css'

const COLORS = ["#FF9304", "#A000FF", "#FDE006"];

const RADIAN = Math.PI / 180;
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

export default function PieCharts({data}) {
  return (
    <PieChart width={300} height={200} className={styles.pieChart}>
        <Pie
        data={data}
        cx={150}
        cy={90}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={90}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend verticalAlign="bottom" margin={{ top: 20, bottom: 20, left: 0, right: 20 }}/>
    </PieChart>
  );
}

