import React, { Component } from "react";
import Chart from "react-apexcharts";
import data from '../../../data/bankFull.json';
import { ColorMap } from '../../../components/contexts/Color/ColorMap'

const profissao = []
const countProfissao = []

data.forEach(element => {
  if(!profissao.includes(element.job)){
    profissao.push(element.job)
  }
});

for(let i = 0; i < profissao.length; i++){
  countProfissao.push(data.filter((item) => item.job === profissao[i]).length)
}

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      options: {
        title: {
          text: 'Profissão por quantidade'
        },
        chart: {
          type: 'bar',
          height: 350,
          
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
            distributed: true
          }
        },
        dataLabels: {
          enabled: false
        },
       
        xaxis: {
          categories: [...profissao]
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
          data: [...countProfissao]
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

export default App;