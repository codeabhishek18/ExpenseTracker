import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import styles from './BarChart.module.css'

const BarGraph = ({data}) => 
{
    const sortedData = data.sort((a,b)=> b.value - a.value);
    console.log(sortedData);

  return (
    <BarChart width={500} height={230} data={sortedData} layout="vertical" className={styles.barchart}>
      <XAxis type="number" stroke="#000" />
      <YAxis dataKey="name" type="category" stroke="#000" tick={{ fontSize: 10 }}/>
      <Tooltip />
      <Bar dataKey="value" fill="#8784D2" barSize={30} />
    </BarChart>
  );
}

export default BarGraph;
