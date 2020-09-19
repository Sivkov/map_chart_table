import React from "react";
import { Line, Pie, Bar } from "react-chartjs-2";
import { Button, ButtonGroup  } from 'react-bootstrap';
import { connect } from 'react-redux';


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
        <ButtonGroup >
          <Button bsStyle="primary" onClick={ this.charTypeChange }  data-chart="Line">Line</Button>
          <Button bsStyle="primary" onClick={ this.charTypeChange }  data-chart="Pie">Pie</Button>
          <Button bsStyle="primary" onClick={ this.charTypeChange }  data-chart="Bar">Bar</Button>
        </ButtonGroup >
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

  export default connect(
    state => ({
      data: state
    }),
    dispatch => ({})
  )(LineChart);
  