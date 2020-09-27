import React from "react";
import { connect } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { bindActionCreators } from 'redux';
import { SET_VALUE, SET_MAP, SET_CHART, SET_NEWDATA } from '../actions/actions';
import { Button } from 'react-bootstrap';
import { ROWS, OPERATORS, TERRITORY } from './constants'


const headerSortingClasses = (column, sortOrder, isLastSorting, colIndex) => (
  sortOrder === 'asc' ? 'demo-sorting-asc' : 'demo-sorting-desc'
);

class TableBasic extends React.Component {
  constructor(props) {
    super(props);
    this.current = false
    this.set_value_parameter = this.props.SET_VALUE
    this.set_chart_parameter = this.props.SET_CHART
    this.set_map_parameter = this.props.SET_MAP
    this.set_newdata = this.props.SET_NEWDATA
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
        footer: columnData => columnData.reduce((acc, item) => acc + Number(item), 0),
        headerEvents: {
          onClick: (e, column, columnIndex) => {
            this.current = 'value' + (columnIndex - 2);
            this.set_value_parameter(this.current);
            this.set_map_parameter(this.createMapData(this.current));
            this.set_chart_parameter(this.createChartData(this.current));
          }
        }

      }, {
        dataField: 'value2',
        text: 'value2',
        sort: true,
        headerSortingClasses,
        footer: columnData => columnData.reduce((acc, item) => acc + Number(item), 0),
        headerEvents: {
          onClick: (e, column, columnIndex) => {
            this.current = 'value' + (columnIndex - 2);
            this.set_value_parameter(this.current);
            this.set_map_parameter(this.createMapData(this.current));
            this.set_chart_parameter(this.createChartData(this.current));
          }
        }
      }, {
        dataField: 'value3',
        text: 'value3',
        sort: true,
        headerSortingClasses,
        footer: columnData => columnData.reduce((acc, item) => acc + Number(item), 0),
        headerEvents: {
          onClick: (e, column, columnIndex) => {
            this.current = 'value' + (columnIndex - 2);
            this.set_value_parameter(this.current);
            this.set_map_parameter(this.createMapData(this.current));
            this.set_chart_parameter(this.createChartData(this.current));
          }
        }
      }];
  }

  createMapData = (parameter) => {
    let result = [];
    let value = parameter;
    let data = this.props.data.data;

    for (let i = 0; i < TERRITORY; i++) {
      result.push({ 'value': 0, territory: i + 1 })
    }

    data.forEach((item) => {
      let search = result.find(s => s.territory === item['territory'])
      if (!search) {
        result[result.length] = { 'value': item[`${value}`], territory: item['territory'] }
      }
      if (search) {
        search.value += item[`${value}`];
      }
    })
    result = result.sort((a, b) => a.territory - b.territory)
    return result
  }


  createChartData = (parameter) => {
    let result = [];
    let value = parameter;
    let data = this.props.data.data;
    data.forEach((item) => {

      let search = result.find(s => s.operator === item['operator'])

      if (!search) {
        result[result.length] = { 'value': item[`${value}`], operator: item['operator'] }
      }

      if (search) {
        search.value += item[`${value}`];
      }
    })
    return result;
  }

  set_data = () => {
    let newState = []
    for (let i = 0; i < ROWS; i++) {
      newState.push({})
    }

    newState.forEach((id, index) => {
      id['id'] = index + 1;
      id['operator'] = 'operator' + Math.floor(Math.random() * OPERATORS + 1);
      id['value1'] = Math.floor(Math.random() * 101);
      id['value2'] = Math.floor(Math.random() * 201);
      id['value3'] = Math.floor(Math.random() * 90);
      id['territory'] = Math.floor(Math.random() * 6) + 1
    })
    return newState
  }

  set = () => {
    this.set_newdata(this.set_data())
    this.set_map_parameter(this.createMapData(this.current));
    this.set_chart_parameter(this.createChartData(this.current));
  }

  render() {
    const options = {
      sizePerPage: 10,
      hideSizePerPage: true,
    };
    return (
      <div className='container-fluid'>
        <div className='table__header__container'>
          <div className='h3'>Таблица показателей</div>
          <Button variant="primary" onClick={this.set} className="m-10">Get new data</Button>
        </div>
        <BootstrapTable
          container-fluid
          keyField="id"
          data={this.props.data.data}
          columns={this.columns}
          className="table"
          bootstrap4
          pagination={paginationFactory(options)}
          striped
          hideSizePerPage={true}
          hover />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    SET_VALUE: bindActionCreators(SET_VALUE, dispatch),
    SET_MAP: bindActionCreators(SET_MAP, dispatch),
    SET_CHART: bindActionCreators(SET_CHART, dispatch),
    SET_NEWDATA: bindActionCreators(SET_NEWDATA, dispatch),

  }
}

export default connect(state => ({ data: state }), mapDispatchToProps)(TableBasic);

