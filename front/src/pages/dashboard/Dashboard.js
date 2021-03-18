// React Core
import React, { Component } from 'react';
import EmailsService from '../../components/Microsoft/EmailsWidget/EmailsWidget';
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
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>
                    <EmailsService number={23}/>
                </div>
                <div>
                    <FilmsService filmId={89} titleFilm="Indiana Jones and the last crusade"/>
                </div>
                <div>
                    <VideosService filmId={89} titleFilm="Indiana Jones and the last crusade"/>
                </div>
            </div>
        );
    }
}
