import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'reactstrap';
import logo from './logo.svg';
import './App.css';

import BodyRoutes from './BodyRoutes';
import Footer from './Footer';

class App extends Component {
    render() {
        return (

        <div className="App">

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
	        <Button color="danger"><Link to="/">Go Home</Link></Button>
	        <Button color="danger"><Link to="/sports">Go Sports</Link></Button>
            </header>

	    <div className="container">
                <BodyRoutes />
	    </div>

	    <Footer />
        </div>

        );
    }
}

export default App;
