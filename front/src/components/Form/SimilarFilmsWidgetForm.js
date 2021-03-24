import React, { Component } from 'react';

import { getPopularFilm, addWidget } from '../../backend/backend';

class SimilarFilmsWidgetForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: [],
            listFilms: [],
            filmId: -1
        };
        this.parseFilms = this.parseFilms.bind(this);
        this.findFilmTitle = this.findFilmTitle.bind(this);
        this.submitWidget = this.submitWidget.bind(this);
        this.createFilmsList = this.createFilmsList.bind(this);
        this.onTitleValueChange = this.onTitleValueChange.bind(this);
    }

    findFilmTitle(id) {
        let title = undefined;

        this.state.films.forEach(film => {
            if (film.filmId.toString() === id.toString()) {
                title = film.title;
            }
        });
        return title;
    }

    parseFilms(films) {
        let listFilms = [];

        if (films === undefined || films === {})
            return [];
        
        listFilms = films.map((film) => {
            const template = {
                filmId: film.id,
                title: film.original_title
            };
            return template;
        });
        return listFilms;
    }

    submitWidget() {
        const filmId = this.state.filmId;
        const filmTitle = this.findFilmTitle(filmId);

        if (filmId === -1 || filmTitle === undefined) {
            alert("Please selected a film to create service.");
            return;
        }

        const serviceId = 2;
        const widgetId = 1;
        const data = {
            filmId: filmId,
            title: filmTitle
        };
        addWidget(serviceId, widgetId, data);
    }

    createFilmsList(films) {
        let list = [];

        if (films === undefined || films === {})
            return [];
        
        list = films.map((film) => <option value={`${film.filmId}`}>{ film.title }</option>);
        this.setState({
            filmId: films[0].filmId
        });
        return list;
    }

    onTitleValueChange(event) {
        this.setState({
            filmId: event.target.value
        });
    }

    async componentDidMount() {
        const response = await getPopularFilm();
        const films = this.parseFilms(response.results);
        const list = this.createFilmsList(films);

        this.setState({
            films: films,
            listFilms: list
        });
    }

    render() {
        const { filmId, listFilms } = this.state;

        return(
            <div>
                <h1>Find similar films of selected film:</h1>
                <form>
                    <label>
                        Film:
                        <select value={filmId} onChange={this.onTitleValueChange}>
                            { listFilms }
                        </select>
                    </label>
                    <button type="button" onClick={() => this.submitWidget()}>Add</button>
                </form>
            </div>
        );
    }
}

export default SimilarFilmsWidgetForm;