import React from "react";
import { Line, Pie, Bar } from "react-chartjs-2";
import Alert from 'react-bootstrap/Alert';
import '../style.css'

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    charType: 'Line',
    data :  {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "First dataset",
          data: [33, 53, 85, 41, 44, 65],
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)"
        },
        {
          label: "Second dataset",
          data: [33, 25, 35, 51, 54, 76],
          fill: false,
          borderColor: "#742774"
        }
      ]
    },

    options : {
        title: {
          display: true,
          text: "Chart Title"
        },
        scales: {
          yAxes: [
            {
              ticks: {
                suggestedMin: 0,
                suggestedMax: 100
              }
            }
          ]
        }
      },

      legend : {
        display: true,
        position: "bottom",
        labels: {
          fontColor: "#323130",
          fontSize: 14
        }
      }
    }
    this.charTypeChange = this.charTypeChange.bind(this);

  }

  charTypeChange (e) {
    let chart=e.currentTarget.getAttribute('data-chart')
    this.setState({charType : chart})
  }

    render() {

      return (
      <div>
        <Alert dismissible variant="danger" onClick={ this.charTypeChange }  data-chart="Line">
          <Alert.Heading>Line</Alert.Heading>
        </Alert>
        <Alert dismissible variant="danger" onClick={ this.charTypeChange }  data-chart="Pie">
          <Alert.Heading>Pie</Alert.Heading>
        </Alert>
        <Alert dismissible variant="danger" onClick={ this.charTypeChange }  data-chart="Bar">
          <Alert.Heading>Bar</Alert.Heading>
        </Alert>
        <div className={ this.state.charType === 'Line'?  "" : "nodisplay" }>
          <Line data={this.state.data} 
            legend={this.state.legend} 
            options={this.state.options} />
        </div>
        <div  className={ this.state.charType === 'Pie' ?  "" : "nodisplay" }>
          <Pie data={this.state.data}
            legend={this.state.legend} 
            options={this.state.options} />
        </div>
        <div  className={ this.state.charType === 'Bar' ?  "" : "nodisplay" }>
          <Bar data={this.state.data} 
            legend={this.state.legend} 
            options={this.state.options} />
        </div>
      </div>
      );
    }
    
  }

  export default LineChart;