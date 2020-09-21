import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let initilaState = []
let rows = 10;
let operators = 3
for (let i=0; i <rows; i++) {
  initilaState.push({})
}

initilaState.forEach((id, index) => {
  id['id']= index+1;
  id['operator']= 'operator'+Math.floor(Math.random() * operators+1);
  id['value1'] = Math.floor(Math.random() * 101);
  id['value2'] = Math.floor(Math.random() * 101);
  id['value3'] = Math.floor(Math.random() * 101);
  id['territory'] = Math.floor(Math.random() * 6)+1;

})

function getData(state = initilaState, action) {
  if (action.type === 'ADD_DATA') {
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
