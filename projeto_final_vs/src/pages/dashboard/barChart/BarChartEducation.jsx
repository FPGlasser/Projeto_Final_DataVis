import React, { Component } from "react";
import data from '../../../data/bankFull.json';
import Chart from 'react-apexcharts'

const education = []
const countEducation = []
const educationCountYes = []
const educationCountNo = []

data.forEach(element => {
  if(!education.includes(element.education)){
    education.push(element.education)
  }
});

education.forEach( currentValue => {
  countEducation.push(data.filter((item) => item.education === currentValue).length)
})

education.forEach( currentValue => {
  educationCountYes.push(data.filter( item => item.education === currentValue && item.Target === 'yes').length)
})

education.forEach( currentValue => {
  educationCountNo.push(data.filter( item => item.education === currentValue && item.Target === 'no').length)
})


class BarChartEducation extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
    
      series: [
        {
          name: 'Nivel escolar',
          data: [...countEducation]
        }, 
        
        {
          name: 'Sim',
          data: [...educationCountYes]
        }, 
        
        {
          name: 'Não',
          data: [...educationCountNo]
        }
      ],

      options: {
        chart: {
          type: 'bar',
          height: 350,
          
        },

        title:{
          text: 'Distribuição dos dados por nivel escolar'
        },

        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '70%',
            endingShape: 'rounded',
            
          },
        },

        dataLabels: {
          enabled: false
        },

        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },

        xaxis: {
          categories: [...education],
        },

        yaxis: {
          title: {
            text: 'Quantidade'
          }
        },

        fill: {
          opacity: 1
        },

        tooltip: {
          y: {
            formatter: function (val) {
              return val
            }
          }
        }
      },
    
    };
  }

  render() {
    return (
      <div id="chart" className="baseChart background_blur">
        <Chart options={this.state.options} series={this.state.series} type="bar" width={500} />
      </div>
    )
  }
}


export default BarChartEducation;