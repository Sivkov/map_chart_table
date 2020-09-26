import React, { Component } from 'react';
import TableBasic from "./table";
import LineChar from './chart';
import Map from './map';
import { connect } from 'react-redux';



export class Main extends Component  {

render() {

    return (
      <div  className="mainContainer">
         <TableBasic />
          <LineChar />
          <Map />
      </div>
    )
  }

}
export default connect( state => ({ data: state  }),  )(Main);
