import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Event.css'

class Event extends Component {
    render() {
        return(
            <div id='event'>
                <h1>Subject: { this.props.subject }</h1>
                <h2>Date: { this.props.startDate } to { this.props.endDate }</h2>
                { (this.props.organizer === undefined ? null : <h2>Organizer: {this.props.organizer}</h2>) }
            </div>
        );
    }
}

Event.propTypes = {
    subject: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    organizer: PropTypes.string
};

export default Event;