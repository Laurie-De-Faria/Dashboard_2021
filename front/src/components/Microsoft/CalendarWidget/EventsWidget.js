import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCalendar } from '../../../backend/backend';

import Event from './Event';

import './EventsWidget.css';

class EventsService extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events: []
        };
        this.createEventsList = this.createEventsList.bind(this);
    }

    createEventsList(events) {
        let list = [];

        if (events === undefined || events === {})
            return [];
        
        list = events.map((event) => <Event subject={event.subject} startDate={`${event.start.dateTime} (${event.start.timeZone})`} endDate={`${event.end.dateTime} (${event.end.timeZone})`} organizer={`${event.organizer.emailAddress.name} (${event.organizer.emailAddress.address})`}/>)
        return list;
    }

    async componentDidMount() {
        const response = await getCalendar(this.props.startDate, this.props.endDate);
        const events = this.createEventsList(response.value);

        this.setState({
            events: (events === [] || events === undefined ? [] : events)
        });
    }

    render() {
        const { events } = this.state;

        return(
            <div id='widget' style={{ maxHeight: '590px', maxWidth: '500px'}}>
                <h1>Events between { this.props.startDate } and { this.props.endDate }:</h1>
                {/* <div className='listEvents'> */}
                <div style={{ overflow: 'auto', maxHeight: '500px', maxWidth: '500px'}}>
                    { events }
                </div>
            </div>
        );
    }
}

EventsService.propTypes = {
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired
};

export default EventsService;