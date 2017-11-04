import React, { Component } from 'react';
import moment from 'moment';

class Footer extends Component {
    render() {

    return (

        <div className="container body-content">

	    <footer>
	        &copy; { moment().format('YYYY') } - CappleBlog
	    </footer>

	</div>

    );

    }
}

export default Footer;
