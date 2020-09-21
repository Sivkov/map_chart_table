import React, { Component } from 'react';
import Main from './resources/components/main';
import './resources/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Main  />
      </div>
    );
  }
}

export default connect(
  state => ({
    data: state
  }),
  dispatch => ({})
)(App);