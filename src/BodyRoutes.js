import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Sports from './Sports';

class BodyRoutes extends Component {
  render() {
    return (
	<Switch>
            <Route exact path='/' component={Home} />
	    <Route exact path='/sports' component={Sports} />
	</Switch>
    );
  }
}

export default BodyRoutes;
