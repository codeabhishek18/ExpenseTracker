import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './BarChart.module.css'

const BarGraph = ({data}) => 
{
    const sortedData = data.sort((a,b)=> b.value - a.value);

  return(
    <div className={styles.barchart}>
        <ResponsiveContainer width="100%" height={280}>
        <BarChart data={sortedData} layout="vertical" className={styles.innerdiv} margin={{ top: 0, right: 0, left: 50, bottom: 0 }}>
            <XAxis type="number" tick={false} axisLine={false} />
            <YAxis dataKey="name" type="category" axisLine={false} tick={{ fontSize: 14, fontWeight: 600 }}/>
            <Tooltip />
            <Bar dataKey="value" fill="#8784D2" barSize={30} radius={[0, 20, 20, 0]}/>
        </BarChart>
        </ResponsiveContainer>
    </div>
  );
}

export default BarGraph;
