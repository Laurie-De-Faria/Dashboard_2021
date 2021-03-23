import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../../styles/Film.css';

class Film extends Component {
    render() {
        return(
            <div id='film'>
                <div>
                    <h1>{ this.props.title }</h1>
                    {
                        (this.props.image === undefined ? null : <img src={this.props.image} alt={this.props.title} />)
                    }
                    { (this.props.date === undefined ? null : <h2>Release date: { this.props.date }</h2>) }
                    { (this.props.realisator === undefined ? null : <h2>By: {this.props.realisator} (realisator) and {this.props.scenarist} (scenarist)</h2>) }
                    { (this.props.vote === undefined ? null : <h2>Vote: {this.props.vote}/10</h2>) }
                </div>
                { (this.props.resume === undefined ? null : 
                    <div id='resume'>
                        <strong>Synopsis: </strong>
                        { this.props.resume }
                    </div>
                ) }
                { (this.props.actors === undefined ? null : 
                    <div>
                        <strong>Actors:</strong>
                        <p> { this.props.resume } </p>
                    </div>
                ) }
            </div>
        );
    }
}

Film.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    realisator: PropTypes.string,
    scenarist: PropTypes.string,
    actors: PropTypes.string,
    resume: PropTypes.string,
    image: PropTypes.string,
    vote: PropTypes.number
};

export default Film;