import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getSimilarFilms } from '../../../backend/backend';

import Film from './Film';

import './FilmsWidget.css';

class FilmsService extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: []
        };
        this.createFilmsList = this.createFilmsList.bind(this);
    }

    createFilmsList(films) {
        let list = [];

        if (films === undefined || films === {})
            return [];
        
        list = films.map((film) => <Film title={film.original_title} date={film.release_date} resume={film.overview} vote={film.vote_average}/>)
        return list;
    }

    async componentDidMount() {
        const response = await getSimilarFilms(this.props.filmId);
        const films = this.createFilmsList(response.results);

        this.setState({
            films: (films === [] || films === undefined ? [] : films)
        });
    }

    render() {
        const { films } = this.state;

        return(
            <div id='widget' style={{ maxHeight: '570px', maxWidth: '500px'}}>
                <h1>Similar films of { this.props.titleFilm } :</h1>
                {/* <div className='listFilms'> */}
                <div style={{ overflow: 'auto', maxHeight: '500px', maxWidth: '500px'}}>
                    { films }
                </div>
            </div>
        );
    }
}

FilmsService.propTypes = {
    filmId: PropTypes.number.isRequired,
    titleFilm: PropTypes.string.isRequired
};

export default FilmsService;