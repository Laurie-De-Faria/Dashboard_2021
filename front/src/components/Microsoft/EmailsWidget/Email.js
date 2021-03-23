import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../../styles/Email.css';

class Email extends Component {
    render() {
        return(
            <div id='email'>
                <div>
                    <h1>Subject: { this.props.subject }</h1>
                    <h2>Date: { this.props.dateReceive }</h2>
                    { (this.props.from === undefined ? null : <h2>From: {this.props.from}</h2>) }
                </div>
                { (this.props.content === undefined ? null : 
                    <div id='content'>
                        { this.props.content }
                    </div>
                ) }
            </div>
        );
    }
}

Email.propTypes = {
    subject: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    dateReceive: PropTypes.string.isRequired,
    content: PropTypes.string
};

export default Email;