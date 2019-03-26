import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  getEnvValues() {
    if (!process.env.REACT_APP_CREATOR_NAME) {
      throw new Error('Please define `REACT_APP_EMPLOYEE_NAME`');
    }
    const creatorName = process.env.REACT_APP_EMPLOYEE_NAME
  
    return { creatorName };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Hoban dev!</h2>
        </div>
        <p className="App-intro">
          <b> Employee Name: { employeeName } </b><br/><br/>
          <b> Position: Rockstar</b>
        </p>
      </div>
    )
  }
}

export default App;
