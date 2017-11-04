import React, { Component } from 'react';
import {Button} from 'reactstrap';
import logo from './logo.svg';
import './App.css';

import Body from './Body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       </div>
       <Body />
    );
  }
}

export default App;
