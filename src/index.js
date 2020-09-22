import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let initilaState = [{ 'value': 'value1' }, { data: [] }, { labelCharts: [] }, { mapData: [] }, { chartData: [] }, { regionTable: [] }, { operatorTable: [] }]
let rows = 110;
let operators = 13;
for (let i = 0; i < rows; i++) {
  initilaState[1]['data'].push({})
}

initilaState[1]['data'].forEach((id, index) => {
  id['id'] = index + 1;
  id['operator'] = 'operator' + Math.floor(Math.random() * operators + 1);
  id['value1'] = Math.floor(Math.random() * 101);
  id['value2'] = Math.floor(Math.random() * 101);
  id['value3'] = Math.floor(Math.random() * 101);
  id['territory'] = Math.floor(Math.random() * 6) + 1;
})

initilaState[3]['mapData'] = createMapData(initilaState[1]['data'], initilaState[0]['value'])
let operatorsData = createChartData(initilaState[1]['data'], initilaState[0]['value'])
operatorsData.map((item, index) => initilaState[2]['labelCharts'].push(item['operator']))
operatorsData.map((item, index) => initilaState[4]['chartData'].push(item['value']))

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

  return result

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
  if (action.type === 'SET_VALUE') {
    alert()
    return [...state, action.payload];
  }
  return state;
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
