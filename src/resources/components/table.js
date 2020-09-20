import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

let products = [];

class TableBasic extends React.Component {
  constructor(props) {
    super(props);
    this.products = this.props.data
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleBtnClick () {
    alert (this.props.data)
  }


  render() {
    return (
      <div>
        <button onClick={ this.handleBtnClick }>Sort Product Name</button>
        <BootstrapTable ref='table' data={ this.products }>
            <TableHeaderColumn dataField='id' isKey={ true } dataSort={ true }>Product ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name' dataSort={ true }>Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField='price1' dataSort={ true } >Product Price</TableHeaderColumn>
            <TableHeaderColumn dataField='price11' dataSort={ true } >Product Price</TableHeaderColumn>
            <TableHeaderColumn dataField='price111' dataSort={ true } >Product Price</TableHeaderColumn>
            <TableHeaderColumn dataField='price1111' dataSort={ true } >Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default connect(
  state => ({
    data: state
  }),
  dispatch => ({})
)(TableBasic);

