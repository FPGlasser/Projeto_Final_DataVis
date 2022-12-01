import React from 'react'
import PieChart from './pieChart/PieChart';
import BarChart from './barChart/BarChart'
import BarChartEducation from './barChart/BarChartEducation';
import TreeMapChart from './treeMapChart/TreeMapChart';


function Dashboard() {
  
  return (
    <div>
      <div className='pageTitle' >
        <span >Dashboard</span>
      </div>
      <div style={{padding: '20px', display: 'flex', justifyContent: 'space-evenly'}}>
        <PieChart />
        <BarChartEducation />
        <BarChart />
      </div>
      <div style={{padding: '20px', display: 'flex', justifyContent: 'space-evenly'}}>
        <TreeMapChart />
        <TreeMapChart />
        <TreeMapChart />
      </div>
    </div>
  )
}

export default Dashboard;