import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getVideosOfFilm } from '../../../backend/backend';
import { MINUTE_MS } from '../../../constants/time';

import Video from './Video';

import './VideosWidget.css';

class VideosService extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        };
        this.createVideosList = this.createVideosList.bind(this);
        this.refresh = this.refresh.bind(this);
        this.getData = this.getData.bind(this);
    }

    refresh() {
        const interval = setInterval(() => {
          console.log(`Update: Videos of film ${this.props.titleFilm} was refresh`);
          this.getData();
        }, MINUTE_MS );
  
        return () => clearInterval(interval);
    }

    createVideosList(videos) {
        let list = [];

        if (videos === undefined || videos === {})
            return [];
        
        list = videos.map((video) => <Video title={video.name} platform={video.site} link={video.key} type={video.type}/>);
        return list;
    }

    async getData() {
        const response = await getVideosOfFilm(this.props.filmId);
        const videos = this.createVideosList(response.results);

        this.setState({
            videos: (videos === [] || videos === undefined ? [] : videos)
        });
    }

    async componentDidMount() {
        await this.getData();
        this.refresh();
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