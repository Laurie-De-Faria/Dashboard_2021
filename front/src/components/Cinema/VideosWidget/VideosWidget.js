import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getVideosOfFilm } from '../../../backend/backend';

import Video from './Video';

import './VideosWidget.css';

class VideosService extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        };
        this.createVideosList = this.createVideosList.bind(this);
    }

    createVideosList(videos) {
        let list = [];

        if (videos === undefined || videos === {})
            return [];
        
        list = videos.map((video) => {console.log(video); return(<Video title={video.name} platform={video.site} link={video.key} type={video.type}/>)})
        return list;
    }

    async componentDidMount() {
        const response = await getVideosOfFilm(this.props.filmId);
        const videos = this.createVideosList(response.results);

        this.setState({
            videos: (videos === [] || videos === undefined ? [] : videos)
        });
    }

    render() {
        const { videos } = this.state;

        return(
            <div id='widget' style={{ maxHeight: '570px', maxWidth: '500px'}}>
                <h1>Videos of "{ this.props.titleFilm }":</h1>
                {/* <div className='listVideos'> */}
                <div style={{ overflow: 'auto', maxHeight: '500px', maxWidth: '500px'}}>
                    { videos }
                </div>
            </div>
        );
    }
}

VideosService.propTypes = {
    filmId: PropTypes.number.isRequired,
    titleFilm: PropTypes.string.isRequired
};

export default VideosService;