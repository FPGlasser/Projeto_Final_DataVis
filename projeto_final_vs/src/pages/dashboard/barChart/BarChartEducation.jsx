import React, { Component } from "react";
import data from '../../../data/bankFull.json';
import Chart from 'react-apexcharts'
import { ColorMap } from "../../../components/contexts/Color/ColorMap";

const education = []
const countEducation = []

data.forEach(element => {
  if(!education.includes(element.education)){
    education.push(element.education)
  }
});

for(let i = 0; i < education.length; i++){
  countEducation.push(data.filter((item) => item.education === education[i]).length)
}

class BarChartEducation extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        data: [...countEducation],
        name: 'Quant'
      }],
      
      options: {
        title: {
          text: 'Nível Escolar por Qunatidade'
        },
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: false,
            distributed: true
          }
        },
        dataLabels: {
          enabled: true
        },
        fill:{
          colors: [...ColorMap]
        },
        xaxis: {
          categories: [...education],
        },
        legend:{
          show: false
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