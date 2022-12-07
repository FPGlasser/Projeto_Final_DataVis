import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import { ColorMap } from '../../../components/contexts/Color/ColorMap';
import data from '../../../data/bankFull.json'


const estadoCivil = []
const countEstadoCivil = []

data.forEach(element => {
  if(!estadoCivil.includes(element.marital)){
    estadoCivil.push(element.marital);
  }
});

estadoCivil.forEach(element => {
  countEstadoCivil.push(data.filter(d => d.marital === element).length)
})


export default class TreeMapChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
    
      series: [
        {
          data: estadoCivil.map((element, index) => {
            return {x: element, y: countEstadoCivil[index]}
          })
        }
      ],

      options: {
        plotOptions: {
          treemap: {
            customScale: 1,
            distributed: true,
          }
        },
        
        colors: ColorMap.reverse(), 
        
        legend: {
          show: true
        },

        chart: {
          height: 350,
          type: 'treemap',
        },

        title: {
          text: 'Estado Civil por Qunatidade'
        }
      },  
    };
  }

  

    render() {
      
      return (
        <div id="chart" className='baseChart'>
          <Chart options={this.state.options} series={this.state.series} type="treemap" height={350} width={450} />
        </div>
      )
    }
}