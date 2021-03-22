// React Core
import React, { Component } from 'react';
import MicrosoftButtonLogin from '../../components/Microsoft/MicrosoftButtonLogin';

export default class SettingsPage extends Component {
    render() {
        const CLIENT_ID = '0e63e88d-d336-4428-8782-2b7d7dd386e7';

        return (
            <div>
                <h1>Microsoft link account</h1>
                <MicrosoftButtonLogin clientId={CLIENT_ID}/>
            </div>
        );
    }
}
