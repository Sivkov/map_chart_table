import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const initilaState  = [
  {'id': 1,'operator':'1','territory':'1', 'value1':'100',  'value2':'20',   'value3':'1111'},
  {'id': 2,'operator':'1','territory':'2', 'value1':'100',  'value2':'20',   'value3':'111'},
  {'id': 3,'operator':'1','territory':'3', 'value1':'100',  'value2':'20',   'value3':'111'},
  {'id': 4,'operator':'2','territory':'1', 'value1':'100',  'value2':'20',   'value3':'11111'},
  {'id':5,'operator':'3','territory':'1', 'value1':'100',  'value2':'20',   'value3':'1111'},
  {'id':6 ,'operator':'4','territory':'1', 'value1':'100',  'value2':'20',   'value3':'11'},
  {'id':7,'operator':'1','territory':'1', 'value1':'100',  'value2':'20',   'value3':'1111'},
  {'id':8,'operator':'1','territory':'2', 'value1':'100',  'value2':'20',   'value3':'111'},
  {'id':9,'operator':'1','territory':'3', 'value1':'100',  'value2':'20',   'value3':'111'},
  {'id':10,'operator':'2','territory':'1', 'value1':'100',  'value2':'20',   'value3':'11111'},
  {'id':11,'operator':'3','territory':'1', 'value1':'100',  'value2':'20',   'value3':'1111'},
  {'id': 12,'operator':'4','territory':'1', 'value1':'100',  'value2':'20',   'value3':'11'},
  {'id': 13,'operator':'1','territory':'1', 'value1':'100',  'value2':'20',   'value3':'1111'},
  {'id': 14,'operator':'1','territory':'3', 'value1':'100',  'value2':'20',   'value3':'111'},
  {'id': 15,'operator':'2','territory':'1', 'value1':'100',  'value2':'20',   'value3':'11111'},
  {'id': 17,'operator':'3','territory':'1', 'value1':'100',  'value2':'20',   'value3':'1111'},
  {'id': 18,'operator':'4','territory':'1', 'value1':'100',  'value2':'20',   'value3':'11'},
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

