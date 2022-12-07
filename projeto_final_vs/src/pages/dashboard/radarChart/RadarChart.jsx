import React, { Component } from 'react'
import data from '../../../data/bankFull.json'
import  Chart  from 'react-apexcharts'

const jobs = [];
const jobsYes = [];
const jobsNo = [];
const JobsHousingYes = [] 


data.forEach( currentValue => {
  if(!jobs.includes(currentValue.job)){
    jobs.push(currentValue.job)
  }
})

jobs.forEach( currentValue => {
  jobsYes.push( data.filter( item => item.job === currentValue && item.Target === 'yes').length )
})

jobs.forEach( currentValue => {
  jobsNo.push(  data.filter(  item => item.job === currentValue && item.Target === 'no').length  )
})

jobs.forEach( currentValue => {
  JobsHousingYes.push(  data.filter(  item => item.job === currentValue && item.housing === 'yes').length )
})


export default class RadarChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
    
      series: [
        {
          name: 'Job x Yes',
          data: [...jobsYes],
        }, 
        
        {
          name: 'Job x no',
          data: [...jobsNo],
        }, 
        
        {
          name: 'job x Housing yes',
          data: [...JobsHousingYes],
        }
      ],

      options: {
        chart: {
          height: 350,
          type: 'radar',
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          }
        },

        title: {
          text: 'Distribuição de Dados'
        },

        stroke: {
          width: 2
        },

        fill: {
          opacity: 0.1
        },

        markers: {
          size: 0
        },
        
        xaxis: {
          categories: [...jobs]
        }
      },
    };
  }

  render() {
    return (
      <div className='baseChart'>
        <Chart options={this.state.options} series={this.state.series} type="radar" height={350} width={450} />
      </div>
    )
  }
}
