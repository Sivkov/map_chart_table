import React, { Component } from 'react';
import { connect } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
const headerSortingClasses = (column, sortOrder, isLastSorting, colIndex) => (
  sortOrder === 'asc' ? 'demo-sorting-asc' : 'demo-sorting-desc'
);

class TableBasic extends React.Component {
  constructor(props) {
    super(props);
    this.products = this.props.data
    this.current = false

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
            this.current = columnIndex;
            console.log(this.current)
            
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
            this.current = columnIndex
            console.log(this.current)
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
            this.current = columnIndex
            console.log(this.current)
          }
        }
      }];
  }

  componentDidMount() {
    this.columns.forEach((id, index) => {
      /*  */
    })
  }

  render() {
    return (
      <div>
        <BootstrapTable
          keyField="id"
          data={this.products}
          columns={this.columns}
          bootstrap4
          pagination={paginationFactory()}
          striped
          hover

        />
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

//https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html?selectedKind=Footer&selectedStory=Function%20Footer&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel

