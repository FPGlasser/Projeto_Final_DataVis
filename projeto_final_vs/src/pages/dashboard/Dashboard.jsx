import React from 'react'
import PieChart from './pieChart/PieChart';
import BarChart from './barChart/BarChart'
import BarChartEducation from './barChart/BarChartEducation';
import TreeMapChart from './treeMapChart/TreeMapChart';
import RadarChart from './radarChart/RadarChart';
import ChartIn from './ChartIn/ChartIn';


function Dashboard() {
  
  return (
    <div>

      <div className='pageTitle' >
        <span> Dashboard </span>
      </div>

      <div style={{padding: '20px', display: 'flex', justifyContent: 'space-evenly', justifyItems: 'stretch'}}>
        <PieChart />
        <BarChartEducation />
        <BarChart />
      </div>

      <div style={{padding: '20px', display: 'flex', justifyContent: 'space-evenly', justifyItems: 'stretch'}}>
        <TreeMapChart />
        <RadarChart />
        <ChartIn />
      </div>

    </div> 
  )
}

export default Dashboard;