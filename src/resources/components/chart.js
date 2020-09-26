import React from "react";
import { Line, Pie, Bar } from "react-chartjs-2";
import { Button, ButtonGroup, Nav  } from 'react-bootstrap';
import { connect } from 'react-redux';



class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    charType: 'Line',
    data :  {
      labels: this.props.data.labelCharts,
      datasets: [
        {
          label: '',
          data:  [],
          fill: true,
          borderColor: "rgba(108, 117, 125, 0.5);",
          backgroundColor: [
            '#3498DB',
            '#1ABB9C',
            '#9B59B6',
            '#9CC2CB',
            '#E74C3C',
            '#3498DB',
            '#1ABB9C',
            '#9B59B6',
            '#9CC2CB',
            '#E74C3C',   
            '#3498DB',
            '#1ABB9C',
            '#9B59B6',
            '#9CC2CB',
            '#E74C3C',
            '#1ABB9C'            
          ]
        },
      ]
    },
    options : {
        title: {
          display: true,
          text: this.props.data.value
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


 componentDidUpdate(prevProps) {
    if (this.props.data.mapData !== prevProps.data.mapData) {
      this.update()
    }
  } 

  update() {
  
    let datacopy = Object.assign({}, this.state.data)
    for (let i=0; i< this.props.data.chartData.length; i++ ) {
        datacopy.datasets[0].data[i]= this.props.data.chartData[i].value
    }

    this.setState({data: datacopy})
  }

  charTypeChange (e) {
    let chart=e.currentTarget.getAttribute('data-chart')
    if ( chart === this.state.charType ) return;
    this.setState({charType : chart})
  }

    render() {

      return (
        <div className='container'>
          <div className='h3'>Диаграмма показателя {this.props.data['value']}</div>


        <ButtonGroup >
          <Button variant="primary" onClick={ this.charTypeChange }  data-chart="Line">Line</Button>
          <Button variant="primary" onClick={ this.charTypeChange }  data-chart="Pie">Pie</Button>
          <Button variant="primary" onClick={ this.charTypeChange }  data-chart="Bar">Bar</Button>
        </ButtonGroup >
        
          <div className={ this.state.charType  === 'Line'?  "" : "nodisplay" }>
            <Line data={this.state.data} 
              legend={this.state.legend} 
              options={this.state.options} redraw/>
          </div>
          <div  className={ this.state.charType   === 'Pie' ?  "" : "nodisplay" }>
            <Pie data={this.state.data}
              legend={this.state.legend} 
              options={this.state.options} redraw/>
          </div>
          <div  className={ this.state.charType   === 'Bar' ?  "" : "nodisplay" }>
            <Bar data={this.state.data} 
              legend={this.state.legend} 
              options={this.state.options} redraw/>
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
  