// React Core
import React, { Component } from 'react';
// import MicrosoftLogin from 'react-microsoft-login';
import MicrosoftButtonLogin from '../../components/Microsoft/MicrosoftButtonLogin';
import { setAccessToken } from '../../constants/userInfos';
import { getAccessToken } from '../../backend/backend';

export default class SettingsPage extends Component {
    constructor(props) {
        super(props);

        // this.authHandler = this.authHandler.bind(this);
        this.getAccessToken = this.getAccessToken.bind(this);
    }

    // authHandler(err, data) {
    //     console.log(err, data);
    // };

    async getAccessToken() {
        const accessToken = await getAccessToken("microsoft");

        setAccessToken(accessToken);
        console.log(accessToken);
    }

    render() {
        const CLIENT_ID = '0e63e88d-d336-4428-8782-2b7d7dd386e7';
        // const redirectUri= 'http://localhost:8081/oauth/connection/redirect';

        return (
            <div>
                <h1>Microsoft link account</h1>
                {/* <MicrosoftLogin clientId={CLIENT_ID} authCallback={this.authHandler} redirectUri={redirectUri}/> */}
                <MicrosoftButtonLogin clientId={CLIENT_ID} authCallback={this.getAccessToken}/>
            </div>
        );
    }
}
