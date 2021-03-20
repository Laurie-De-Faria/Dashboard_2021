import React, { Component } from 'react';

import EmailsWidgetForm from '../../components/Form/EmailsWidgetForm';
import CalendarWidgetForm from '../../components/Form/CalendarWidgetForm';
import SimilarFilmsWidgetForm from '../../components/Form/SimilarFilmsWidgetForm';
import VideosOfFilmWidgetForm from '../../components/Form/VideosOfFilmWidgetForm';

class CreateWidgetPage extends Component {
    render() {
        return (
            <div>
                <h1>Create a widget:</h1>
                <EmailsWidgetForm />
                <CalendarWidgetForm />
                <SimilarFilmsWidgetForm />
                <VideosOfFilmWidgetForm />
            </div>
        );
    }
}

export default CreateWidgetPage;