import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getSimilarFilms } from '../../../backend/backend';
import { MINUTE_MS } from '../../../constants/time';

import Film from './Film';

import './FilmsWidget.css';

class FilmsService extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: []
        };
        this.createFilmsList = this.createFilmsList.bind(this);
        this.refresh = this.refresh.bind(this);
        this.getData = this.getData.bind(this);
    }

    refresh() {
        const interval = setInterval(() => {
          console.log(`Update: List of similar film of ${this.props.titleFilm} was refresh`);
          this.getData();
        }, MINUTE_MS );
  
        return () => clearInterval(interval);
      }

    createFilmsList(films) {
        let list = [];

        if (films === undefined || films === {})
            return [];
        
        list = films.map((film) => <Film title={film.original_title} date={film.release_date} resume={film.overview} vote={film.vote_average}/>)
        return list;
    }

    async getData() {
        const response = await getSimilarFilms(this.props.filmId);
        const films = this.createFilmsList(response.results);

        this.setState({
            films: (films === [] || films === undefined ? [] : films)
        });
    }

    async componentDidMount() {
        await this.getData();
        this.refresh();
    }

    render() {
        const { films } = this.state;

        return(
            <div id='widget' style={{ maxHeight: '570px', maxWidth: '500px'}}>
                <h1>Similar films of "{ this.props.titleFilm }":</h1>
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