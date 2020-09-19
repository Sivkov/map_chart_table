import React, { Component } from 'react';
import TableBasic from "./table";
import LineChar from './chart';
import Map from './map';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';



const data = [
   {'operator':'1','territory':'1', 'value1':'10',  'value2':'20', 'value2':'30',  'territory':'1'},
   {'operator':'1','territory':'2', 'value1':'10',  'value2':'20', 'value2':'30',  'territory':'1'},
   {'operator':'1','territory':'3', 'value1':'10',  'value2':'20', 'value2':'30',  'territory':'1'},
   {'operator':'2','territory':'1', 'value1':'10',  'value2':'20', 'value2':'30',  'territory':'1'},
   {'operator':'3','territory':'1', 'value1':'10',  'value2':'20', 'value2':'30',  'territory':'1'},
   {'operator':'4','territory':'1', 'value1':'10',  'value2':'20', 'value2':'30',  'territory':'1'},
];

const regiomData =  [];
const chartData =[]

export class Main extends Component  {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }

  click () {
    alert (this.props.data)
  }

  render() {

    return (
      <div>
        <Button bsStyle="primary" onClick={ this.click }>clicn</Button>
         <TableBasic />
          <LineChar />
          <Map />
      </div>
    )
  }

}

export default connect(
  state => ({
    data: state
  }),
  dispatch => ({})
)(Main);
