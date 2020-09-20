import React, { Component } from 'react';
import TableBasic from "./table";
import LineChar from './chart';
import Map from './map';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';


const regionData =  [];
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
