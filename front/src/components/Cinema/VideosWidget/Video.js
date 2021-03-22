import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Video.css'

class Video extends Component {
    render() {
        const url = `https://www.youtube.com/embed/${this.props.link}`;

        return(
            <div id='video'>
                <h1>{ this.props.title }</h1>
                {(this.props.type === undefined ? null : <h2>{ this.props.type }</h2>)}
                <div>
                    {(this.props.platform === 'YouTube' ? 
                        <iframe title={this.props.title} width="420" height="315"
                            src={url} /> 
                        : <p>not available on YouTube</p>
                    )}
                </div>
            </div>
        );
    }
}

Video.propTypes = {
    title: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    type: PropTypes.string,
};

export default Video;