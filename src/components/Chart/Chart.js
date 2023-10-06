import React from 'react'
import ChartBar from './ChartBar.js'
import '../Css/Chart.css'
const Chart = (props) => {
    const valueArray=props.dataPoints.map(dataPoint=>dataPoint.value);
    const totalMaximum=Math.max(...valueArray);
  return (
    <div className='chart'>
      {props.dataPoints.map(dataPoint=>
      <ChartBar
       key={dataPoint.label}
       value={dataPoint.value} 
       maxValue={totalMaximum} 
       label={dataPoint.label}
       />)}
    </div>
  )
}

export default Chart;
