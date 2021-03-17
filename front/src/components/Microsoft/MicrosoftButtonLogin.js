import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loginService } from '../../backend/backend';

class MicrosoftButtonLogin extends Component {
    constructor(props) {
        super(props);

        this.login = this.login.bind(this);
    }

    async login() {
        await loginService();
        // possible to await redirection ?
        console.log("Hey")
        this.props.authCallback();
    }

    render() {
        return (
            <button onClick={() => this.login()}>Sign in with Microsoft</button>
        );
    }
}

MicrosoftButtonLogin.propTypes = {
    clientId: PropTypes.string.isRequired,
    authCallback: PropTypes.func.isRequired,
};

export default MicrosoftButtonLogin;