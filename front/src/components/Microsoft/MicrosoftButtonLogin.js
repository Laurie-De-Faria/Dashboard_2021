import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { loginService } from '../../backend/backend';

class MicrosoftButtonLogin extends Component {
    // constructor(props) {
    //     super(props);

    //     this.login = this.login.bind(this);
    // }

    //async login() {
    //    await loginService();
    //}

    render() {
        return (
            //<button onClick={() => this.login()}>Sign in with Microsoft</button>
            <a href={`${process.env.REACT_APP_API_URL}/oauth/connection`} target="blank" noreferrer noopnener>Sign in with Microsoft</a>
        );
    }
}

MicrosoftButtonLogin.propTypes = {
    clientId: PropTypes.string.isRequired,
};

export default MicrosoftButtonLogin;