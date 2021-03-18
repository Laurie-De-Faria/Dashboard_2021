// React Core
import React, { Component } from 'react';
import EmailsService from '../../components/Microsoft/EmailsWidget/EmailsWidget';
import EventsService from '../../components/Microsoft/CalendarWidget/EventsWidget';
import FilmsService from '../../components/Cinema/FilmsWidget/FilmWidget';
import VideosService from '../../components/Cinema/VideosWidget/VideosWidget';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            widgets: {}
        };
    }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', alignContent: 'space-between' }}>
                <div>
                    <EmailsService number={23}/>
                </div>
                <div>
                    <FilmsService filmId={89} titleFilm="Indiana Jones and the last crusade"/>
                </div>
                <div>
                    <VideosService filmId={89} titleFilm="Indiana Jones and the last crusade"/>
                </div>
                <div>
                    <EventsService startDate='2021-01-01T19:00:00-08:00' endDate='2021-03-27T19:00:00-08:00'/>
                </div>
                <div>
                    <VideosService filmId={12} titleFilm="Nemo"/>
                </div>
            </div>
        );
    }
}
