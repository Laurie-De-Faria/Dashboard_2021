import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { loginService } from '../../backend/backend';
import { userId } from '../../constants/userInfos';

class MicrosoftButtonLogin extends Component {
    render() {
        return (
            <a href={`${process.env.REACT_APP_API_URL}/oauth/${userId}/connection`} target="blank" noreferrer noopnener>Sign in with Microsoft</a>
        );
    }
}

MicrosoftButtonLogin.propTypes = {
    clientId: PropTypes.string.isRequired,
};

export default MicrosoftButtonLogin;