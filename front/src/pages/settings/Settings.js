// React Core
import React, { Component } from 'react';
import MicrosoftLogin from "react-microsoft-login";

export default class SettingsPage extends Component {
    constructor(props) {
        super(props);

        this.authHandler = this.authHandler.bind(this);
    }

    authHandler(err, data) {
        console.log(err, data);
    };

    render() {
        const CLIENT_ID = '0e63e88d-d336-4428-8782-2b7d7dd386e7';

        return (
            <div>
                <h1>To DO : oauth, etc</h1>
                <MicrosoftLogin clientId={CLIENT_ID} authCallback={this.authHandler} />
            </div>
        );
    }
}
