import React, { Component } from 'react';
import { connect } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { bindActionCreators } from 'redux';
import { SET_VALUE } from '../actions/actions';


const headerSortingClasses = (column, sortOrder, isLastSorting, colIndex) => (
  sortOrder === 'asc' ? 'demo-sorting-asc' : 'demo-sorting-desc'
);

class TableBasic extends React.Component {
  constructor(props) {
    super(props);
    this.products = this.props.data['data']
    this.current = false
    this.set_chart = this.props.SET_VALUE

    this.columns = [
      {
        dataField: 'id',
        text: '#',
        sort: true,
        footer: "",
        sort: true,
        headerSortingClasses

      }, {
        dataField: 'operator',
        text: 'operator',
        sort: true,
        footer: '',
        sort: true,
        headerSortingClasses

      }, {
        dataField: 'territory',
        text: 'territory',
        sort: true,
        headerSortingClasses,
        footer: ''
      }, {
        dataField: 'value1',
        text: 'value1',
        sort: true,
        headerSortingClasses,
        footer: columnData => Math.floor ( columnData.reduce((acc, item) => acc + Number(item), 0) / columnData.length ),
        headerEvents: {
          onClick: (e, column, columnIndex) => {
            this.current = 'value'+(columnIndex-2);
            console.log(this.current)
            this.set_chart(this.current)
            
          }
        }

      }, {
        dataField: 'value2',
        text: 'value2',
        sort: true,
        headerSortingClasses,
        footer: columnData => Math.floor (  columnData.reduce((acc, item) => acc + Number(item), 0) / columnData.length  ),
        headerEvents: {
          onClick: (e, column, columnIndex) => {
            this.current = 'value'+(columnIndex-2);
            console.log(this.current)
            this.set_chart(this.current)
          }
        }
      }, {
        dataField: 'value3',
        text: 'value3',
        sort: true,
        headerSortingClasses,
        footer: columnData => Math.floor ( columnData.reduce((acc, item) => acc + Number(item), 0) / columnData.length),
        headerEvents: {
          onClick: (e, column, columnIndex) => {
            this.current = 'value'+(columnIndex-2);
            console.log(this.current)
            this.set_chart(this.current)
          }
        }
      }];

  }

  set_chart (item) {
    return {
      type: 'SET_VALUE',
      payload: 'value2'
    }
  }

  render() {
    return (
          <div className='container'>
            <div className='h3'>Диаграмма показателя {this.props.data['value']}</div>
            <BootstrapTable
            keyField="id"
            data={this.products}
            columns={this.columns}
            bootstrap4
            pagination={paginationFactory()}
            striped
            hover  />
          </div>
          
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    SET_VALUE: bindActionCreators(SET_VALUE, dispatch ) 
  }
}


export default connect( state => ({ data: state  }), mapDispatchToProps )(TableBasic);


