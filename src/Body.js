import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Body from './Home';
import Sports from './Sports';

class Body extends Component {
  render() {
    return (
	<Switch>
            <Route exact path='/' component={Home} />
	    <Route exact path='/sports' component={Sports} />
	</Switch>
    );
  }
}

export default Body;
