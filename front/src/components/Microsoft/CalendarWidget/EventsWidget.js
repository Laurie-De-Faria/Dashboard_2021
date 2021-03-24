import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCalendar } from '../../../backend/backend';
import { MINUTE_MS } from '../../../constants/time';

import Event from './Event';
import ButtonDeleteWidget from '../../ButtonDeleteWidget';

import '../../../styles/Widget.css';

class EventsService extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events: []
        };
        this.createEventsList = this.createEventsList.bind(this);
        this.refresh = this.refresh.bind(this);
        this.getData = this.getData.bind(this);
    }

    refresh() {
        const interval = setInterval(() => {
          console.log('Update: Calendar events refresh');
          this.getData();
        }, MINUTE_MS );
  
        return () => clearInterval(interval);
    }

    createEventsList(events) {
        let list = [];

        if (events === undefined || events === {})
            return [];
        
        list = events.map((event) => <Event subject={event.subject} startDate={`${event.start.dateTime} (${event.start.timeZone})`} endDate={`${event.end.dateTime} (${event.end.timeZone})`} organizer={`${event.organizer.emailAddress.name} (${event.organizer.emailAddress.address})`}/>)
        return list;
    }

    async getData() {
        const response = await getCalendar(this.props.startDate, this.props.endDate);
        const events = this.createEventsList(response.value);

        this.setState({
            events: (events === [] || events === undefined ? [] : events)
        });
    }

    async componentDidMount() {
        await this.getData();
        this.refresh();
    }

    render() {
        const { events } = this.state;

        return(
            <div className='widget' style={{ maxHeight: '590px', maxWidth: '500px'}}>
                <div className='header'>
                    <h1>Events between { this.props.startDate } and { this.props.endDate }:</h1>
                    <ButtonDeleteWidget
                        widgetId={2}
                        serviceId={1}
                        data={{
                            startDate: this.props.startDate,
                            endDate: this.props.endDate
                        }}
                        widgetUniqueId={this.props.id}
                    />
                </div>
                <div className='list'> 
                    { events }
                </div>
            </div>
        );
    }
}

EventsService.propTypes = {
    id: PropTypes.number.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired
};

export default EventsService;