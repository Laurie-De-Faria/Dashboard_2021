import React, { Component } from 'react';

import EmailsWidgetForm from '../../components/Form/EmailsWidgetForm';
import CalendarWidgetForm from '../../components/Form/CalendarWidgetForm';
import SimilarFilmsWidgetForm from '../../components/Form/SimilarFilmsWidgetForm';
import VideosOfFilmWidgetForm from '../../components/Form/VideosOfFilmWidgetForm';

import '../../styles/CreateWidgetPage.css';

class CreateWidgetPage extends Component {
    render() {
        return (
            <div className='pageCreate'>
                <h1 className='title'>Create a widget:</h1>
                <ul>
                    <li><EmailsWidgetForm /></li>
                    <li><CalendarWidgetForm /></li>
                    <li><SimilarFilmsWidgetForm /></li>
                    <li><VideosOfFilmWidgetForm /></li>
                </ul>
            </div>
        );
    }
}

export default CreateWidgetPage;