import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


let initilaState = { 
  'value': 'value1' ,  
  data: [] ,  
  labelCharts: [] , 
  mapData: [] ,  
  chartData: [] ,  
  regionTable: [] ,  
  operatorTable: [],
  maxData: 100,
}

let rows = 6;
let operators = 2;
const TERRITORY = 6;
for (let i = 0; i < rows; i++) {
  initilaState['data'].push({})
}

initilaState['data'].forEach((id, index) => {
  id['id'] = index + 1;
  id['operator'] = 'operator' + Math.floor(Math.random() * operators + 1);
  id['value1'] = Math.floor(Math.random() * 101);
  id['value2'] = Math.floor(Math.random() * 201);
  id['value3'] = Math.floor(Math.random() * 90);
  id['territory'] = index+1//Math.floor(Math.random() * TERRITORY) + 1;
})

initilaState['mapData'] = createMapData(initilaState['data'], initilaState['value'])
let operatorsData = createChartData(initilaState['data'], initilaState['value'])
operatorsData.map((item, index) => initilaState['labelCharts'].push(item['operator']))
operatorsData.map((item, index) => initilaState['chartData'].push(item['value']))

function createMapData(data, value = 'value1') {

  let result = [];
  data.forEach((item, index, arr) => {

    let search = result.find(s => s.territory === item['territory'])

    if (!search) {
      result[result.length] = { 'value': item[`${value}`], territory: item['territory'] }
    }

    if (search) {
      search.value += item[`${value}`];
    }
  })
  return result;
}


function createChartData(data, value = 'value1') {
  let result = [];
  data.forEach((item, index, arr) => {

    let search = result.find(s => s.operator === item['operator'])

    if (!search) {
      result[result.length] = { 'value': item[`${value}`], operator: item['operator'] }
    }

    if (search) {
      search.value += item[`${value}`];
    }
  })
  return result
}

function getData(state = initilaState, action) {
  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, value: action.payload }
    case 'SET_MAP':
      return { ...state, mapData: action.payload }
    case 'SET_CHART':
      return { ...state, chartData: action.payload }
    case 'SET_MAX':
      return { ...state, maxData: action.payload }

    default:
      return state;
  }
}

const store = createStore(getData);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



