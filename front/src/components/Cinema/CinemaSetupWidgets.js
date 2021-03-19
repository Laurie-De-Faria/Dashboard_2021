import React from 'react';

import FilmsService from '../../components/Cinema/FilmsWidget/FilmWidget';
import VideosService from '../../components/Cinema/VideosWidget/VideosWidget';

export function setupCinemaWidget(widgetId, data) {
    switch(widgetId) {
        case 1:
            return setupSimilarMoviesWidget(data);
        case 2:
            return setupVideosOfMovieWidget(data);
        default:
            return null;
    }
}

function setupSimilarMoviesWidget(data) {
    return <FilmsService filmId={data.filmId} titleFilm={data.title}/>;
}

function setupVideosOfMovieWidget(data) {
    return <VideosService filmId={data.filmId} titleFilm={data.title}/>;
}