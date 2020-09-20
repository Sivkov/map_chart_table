import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const cellEditProp = {
  mode: 'click'
};

class TableBasic extends React.Component {
  constructor(props) {
    super(props);
    this.products = this.props.data
    this.handleClick = this.handleClick.bind(this)
    this.options = {
      onPageChange: this.onPageChange.bind(this),
      onSizePerPageList: this.sizePerPageListChange.bind(this),
      hideSizePerPage: true,
    };
  }

  handleClick(e) {
    alert()
  }


  sizePerPageListChange(sizePerPage) {
   // alert(`sizePerPage: ${sizePerPage}`);
  }

  onPageChange(page, sizePerPage) {
   // alert(`page: ${page}, sizePerPage: ${sizePerPage}`);
  }


  render() {
    return (
      <div>
        <BootstrapTable 
          data={this.products} 
          onClick={this.handleClick} 
          cellEdit={ cellEditProp }
          pagination
          options={ this.options }
          striped hover
          tableStyle={ { margin: 0 } }
          headerStyle={ {  margin: 0 } }
          
        >
          <TableHeaderColumn dataField='operator' isKey={true} dataSort={true}>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='territory' dataSort={true}>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='value1' dataSort={true} >Product Price</TableHeaderColumn>
          <TableHeaderColumn dataField='value2' dataSort={true} >Product Price</TableHeaderColumn>
          <TableHeaderColumn dataField='value3' dataSort={true} >Product Price</TableHeaderColumn>
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

