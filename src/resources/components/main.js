import React, { Component } from 'react';
import TableBasic from "./table";
import Chart from './chart';
import Map from './map';
/* import LaunchScreen from './launchScreen';
 */import { connect } from 'react-redux';


export class Main extends Component {
  render() {
    return (
      <div className="row" >
        <TableBasic />
        <Chart />
        <Map />
      </div>
    )
  }
}

export default connect(state => ({ data: state }),)(Main);
