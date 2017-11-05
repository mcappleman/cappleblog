import React, { Component } from 'react';
import './App.css';

import BodyRoutes from './BodyRoutes';
import Footer from './Footer';
import Header from './Header';

class App extends Component {
    render() {
        return (

        <div className="App">

	    <Header />

	    <div className="container body-content">
                <BodyRoutes />
	    </div>

	    <Footer />
        </div>

        );
    }
}

export default App;
