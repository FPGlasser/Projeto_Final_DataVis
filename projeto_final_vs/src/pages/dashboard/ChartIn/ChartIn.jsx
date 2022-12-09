import React, { Component } from 'react'
import Chart from 'react-apexcharts'
import data from '../../../data/bankFull.json'
import { ColorMap } from '../../../components/contexts/Color/ColorMap'

const campaigns = []

data.forEach(currentValue => {
  if(!campaigns.includes(currentValue.campaign)){
    campaigns.push(currentValue.campaign)
  }
})

const campaigns2 = campaigns.slice(0, 5)
console.log("Campaigns: ", campaigns)

const campaignsDist = []

campaigns2.forEach( currentValue => {

  campaignsDist.push (data.filter(item => item.campaign === currentValue).length)
}
)


export default class ChartIn extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      options: {
        title: {
          text: 'Quntidade de contactos por campanha'
        },
        chart: {
          type: 'bar',
          height: 350,
          
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: false,
            distributed: true
          }
        },
        dataLabels: {
          enabled: false
        },
       
        xaxis: {
          categories: [...campaigns2]
        },

        fill:{
          colors: [...ColorMap]
        },

        legend: {
          show: false
        },
      },

      series: [
        {
          name: "Quantidade",
          data: [...campaignsDist]
        }
      ]
    };
  }

  render() {
    
    return (
      <div>
        <div className="row">
          <div className="mixed-chart baseChart background_blur">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}
