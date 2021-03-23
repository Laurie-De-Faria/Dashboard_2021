import React from 'react';

import FilmsService from '../../components/Cinema/FilmsWidget/FilmWidget';
import VideosService from '../../components/Cinema/VideosWidget/VideosWidget';

export function setupCinemaWidget(widgetId, data, id) {
    switch(widgetId) {
        case 1:
            return setupSimilarMoviesWidget(data, id);
        case 2:
            return setupVideosOfMovieWidget(data, id);
        default:
            return null;
    }
}

function setupSimilarMoviesWidget(data, id) {
    return <FilmsService filmId={data.filmId} titleFilm={data.title} id={id}/>;
}

function setupVideosOfMovieWidget(data, id) {
    return <VideosService filmId={data.filmId} titleFilm={data.title} id={id}/>;
}