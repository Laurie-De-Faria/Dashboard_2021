import React from 'react';

import FilmsService from '../../components/Cinema/FilmsWidget/FilmWidget';
import VideosService from '../../components/Cinema/VideosWidget/VideosWidget';

export function setupCinemaWidget(widgetId, data, id, actionRemove) {
    switch(widgetId) {
        case 1:
            return setupSimilarMoviesWidget(data, id, actionRemove);
        case 2:
            return setupVideosOfMovieWidget(data, id, actionRemove);
        default:
            return null;
    }
}

function setupSimilarMoviesWidget(data, id, actionRemove) {
    return <FilmsService filmId={data.filmId} titleFilm={data.title} id={id} actionRemove={actionRemove}/>;
}

function setupVideosOfMovieWidget(data, id, actionRemove) {
    return <VideosService filmId={data.filmId} titleFilm={data.title} id={id} actionRemove={actionRemove}/>;
}