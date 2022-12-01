import React, { Component } from 'react'
import Chart from 'react-apexcharts'
import data from '../../../data/bankFull.json'
import { ColorMap } from '../../../components/contexts/Color/ColorMap'
/*
const job = []
const jobYesCount = []

data.forEach((item) =>{
  if(!job.includes(item.education)){
    job.push(item.education)
  }
})

job.forEach((item)=> {
  jobYesCount.push(data.filter(element => element.education === item && element.Target === 'no').length)
})

job.forEach((item, i)=>{
  console.log(job[i] ,':', jobYesCount[i])
})*/

export default class PieChart extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
    
      series: [data.filter(item => item.Target === "yes").length, 
                data.filter(item => item.Target === "no").length],
      options: {
        title: {
          text: 'Quantidade dos Sim e Não'
        },
        chart: {
          width: 380,
          type: 'donut',
          events: {
            dataPointSelection: (event, chartContext, config) => {
              console.log(chartContext, config);
            }
          }
        },
        plotOptions: {
          pie: {
            customScale: 1,
            distributed: true,
            donut: {
              labels: {
                show: true,
              }
            }
          }
        },

        labels: ['Sim', 'Não'],
      
        colors: [ColorMap[2], ColorMap[3]],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            }    
          }
        }]
      },
    
    
    };
  }

  render() {
    return(
      <div className='baseChart'>
        <Chart options={this.state.options} series={this.state.series} type="donut" width={400} />
      </div>
    )
  }
}

