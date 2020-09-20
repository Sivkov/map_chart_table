import React from "react";
import { Line, Pie, Bar } from "react-chartjs-2";
import { Button, ButtonGroup  } from 'react-bootstrap';
import { connect } from 'react-redux';


class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.labels =[]
    this.data = []
    this.props.data.map((item, index) => this.labels.push(item['operator']))
    this.props.data.map((item, index) => this.data.push(item['value3']))


    this.state = {
    charType: 'Line',
    data :  {
      labels: this.labels,
      datasets: [
        {
          label: "First dataset",
          data: this.data,
          fill: true,
          borderColor: "rgb(108, 117, 125);",
          backgroundColor: [
            'rgb(0, 123, 255)',
            'rgb(102, 16, 242)',
            'rgb(111, 66, 193)',
            'rgb(32, 201, 151)',
            'rgb(23, 162, 184)',
            'rgb(0, 123, 255)',
            'rgb(102, 16, 242)',
            'rgb(111, 66, 193)',
            'rgb(32, 201, 151)',
            'rgb(23, 162, 184)', 
            'rgb(0, 123, 255)',
            'rgb(102, 16, 242)',
            'rgb(111, 66, 193)',
            'rgb(32, 201, 151)',
            'rgb(23, 162, 184)',
          ]
        },
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
  