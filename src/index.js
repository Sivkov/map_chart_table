import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const initilaState = [
  {'operator':'1','territory':'1', 'value1':'10',  'value2':'20', 'value2':'30',  'territory':'1'},
  {'operator':'1','territory':'2', 'value1':'10',  'value2':'20', 'value2':'30',  'territory':'1'},
  {'operator':'1','territory':'3', 'value1':'10',  'value2':'20', 'value2':'30',  'territory':'1'},
  {'operator':'2','territory':'1', 'value1':'10',  'value2':'20', 'value2':'30',  'territory':'1'},
  {'operator':'3','territory':'1', 'value1':'10',  'value2':'20', 'value2':'30',  'territory':'1'},
  {'operator':'4','territory':'1', 'value1':'10',  'value2':'20', 'value2':'30',  'territory':'1'},
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

