// React Core
import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm';
import PropTypes from 'prop-types';

export default class LoginPage extends Component {
    render() {
        return (
            <LoginForm setUser={this.props.action}/>
        );
    }
}

LoginPage.propTypes = {
    action: PropTypes.func.isRequired,
};