import React from "react";
import { connect } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { bindActionCreators } from 'redux';
import { SET_VALUE, SET_MAP, SET_CHART , SET_MAX} from '../actions/actions';


const headerSortingClasses = (column, sortOrder, isLastSorting, colIndex) => (
  sortOrder === 'asc' ? 'demo-sorting-asc' : 'demo-sorting-desc'
);

class TableBasic extends React.Component {
  constructor(props) {
    super(props);
    this.products = this.props.data['data']
    this.current = false
    this.set_value_parameter = this.props.SET_VALUE
    this.set_chart_parameter = this.props.SET_CHART
    this.set_map_parameter = this.props.SET_MAP
    this.set_max_parameter = this.props.SET_MAX


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
        footer: columnData => Math.floor(columnData.reduce((acc, item) => acc + Number(item), 0) / columnData.length),
        headerEvents: {
          onClick: (e, column, columnIndex) => {
            this.current = 'value' + (columnIndex - 2);
            if ( this.props.data.value ===  this.current ) return;
            this.set_value_parameter(this.current);
            this.set_map_parameter(this.createMapData(this.current));
            this.set_chart_parameter(this.createChartData(this.current));
          //  this.set_max_parameter( this.maxData());
          }
        }

      }, {
        dataField: 'value2',
        text: 'value2',
        sort: true,
        headerSortingClasses,
        footer: columnData => Math.floor(columnData.reduce((acc, item) => acc + Number(item), 0) / columnData.length),
        headerEvents: {
          onClick: (e, column, columnIndex) => {
            this.current = 'value' + (columnIndex - 2);
            this.set_value_parameter(this.current);
            this.set_map_parameter(this.createMapData(this.current));
            this.set_chart_parameter(this.createChartData(this.current));
          //  this.set_max_parameter( this.maxData());

          }
        }
      }, {
        dataField: 'value3',
        text: 'value3',
        sort: true,
        headerSortingClasses,
        footer: columnData => Math.floor(columnData.reduce((acc, item) => acc + Number(item), 0) / columnData.length),
        headerEvents: {
          onClick: (e, column, columnIndex) => {
            this.current = 'value' + (columnIndex - 2);
            this.set_value_parameter(this.current);
            this.set_map_parameter(this.createMapData(this.current));
            this.set_chart_parameter(this.createChartData(this.current));
         //   this.set_max_parameter( this.maxData() );


          }
        }
      }];
  }

  createMapData = (parameter) => {
    let result = [];
    let value = parameter;
    let data = this.props.data.data;

    data.forEach((item) => {
      let search = result.find(s => s.territory === item['territory'])
      if (!search) {
        result[result.length] = { 'value': item[`${value}`], territory: item['territory'] }
      }
      if (search) {
        search.value += item[`${value}`];
      }
    })
    return result
  }


  createChartData = (parameter) => {
    let result = [];
     let value = parameter;
     let data= this.props.data.data;
     data.forEach((item ) => {
   
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

  maxdata = () => {
    let max = this.props.data.maxData;
    max= 200
    return max//Math.max ( ...this.props.data.mapData.map( a => a.value) )
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
    SET_MAX: bindActionCreators(SET_MAX, dispatch),

  }
}

export default connect(state => ({ data: state }), mapDispatchToProps)(TableBasic);

