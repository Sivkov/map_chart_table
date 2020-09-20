import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const initilaState = [
  { 'id': 1,  'operator': 'operator1',  'territory': 1, 'value1': 101, 'value2': 201, 'value3': '1111' },
  { 'id': 2,  'operator': 'operator1',  'territory': 2, 'value1': 102, 'value2': 202, 'value3': '111' },
  { 'id': 3,  'operator': 'operator1',  'territory': 3, 'value1': 102, 'value2': 203, 'value3': '111' },
  { 'id': 4,  'operator': 'operator2',  'territory': 1, 'value1': 105, 'value2': 201, 'value3': '11111' },
  { 'id': 5,  'operator': 'operator3',  'territory': 1, 'value1': 100, 'value2': 202, 'value3': '1111' },
  { 'id': 6,  'operator': 'operator4',  'territory': 1, 'value1': 110, 'value2': 203, 'value3': '11' },
  { 'id': 7,  'operator': 'operator5',  'territory': 1, 'value1': 100, 'value2': 201, 'value3': '1111' },
  { 'id': 8,  'operator': 'operator6',  'territory': 2, 'value1': 110, 'value2': 202, 'value3': '111' },
  { 'id': 9,  'operator': 'operator7',  'territory': 3, 'value1': 100, 'value2': 203, 'value3': '111' },
  { 'id': 10, 'operator': 'operator8',  'territory': 1, 'value1': 100, 'value2': 201, 'value3': '11111' },
  { 'id': 11, 'operator': 'operator9',  'territory': 1, 'value1': 100, 'value2': 202, 'value3': '1111' },
  { 'id': 12, 'operator': 'operator10', 'territory': 1, 'value1': 100, 'value2': 203, 'value3': '11' },
  { 'id': 13, 'operator': 'operator11', 'territory': 1, 'value1': 100, 'value2': 201, 'value3': '1111' },
  { 'id': 14, 'operator': 'operator12', 'territory': 3, 'value1': 100, 'value2': 202, 'value3': '111' },
  { 'id': 15, 'operator': 'operator13', 'territory': 1, 'value1': 100, 'value2': 203, 'value3': '11111' },
  { 'id': 17, 'operator': 'operator14', 'territory': 1, 'value1': 100, 'value2': 201, 'value3': '1111' },
  { 'id': 18, 'operator': 'operator15', 'territory': 1, 'value1': 100, 'value2': 203, 'value3': '11' },
];



function getData(state = initilaState, action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
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

