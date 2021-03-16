/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
// import Cookies from 'js-cookie';
import { resetUserInfos, userName } from '../constants/userInfos';

export default class Navbar extends Component {
    logout() {
        // Cookies.remove('token');
        // Cookies.remove('refresh-token');
        resetUserInfos();
    }

    render() {
        return (
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="navbar-holder d-flex align-items-center justify-content-between">
                        <div className="navbar-header">
                            <a href="index.html" className="navbar-brand d-none d-sm-inline-block">
                                <div className="brand-text d-none d-lg-inline-block">
                                    <span>DASHBOARD </span>
                                    {' - '}
                                    <strong>{ userName }</strong>
                                </div>
                            </a>
                            <button id="toggle-btn" href="#" className="menu-btn active" /><span /><span /><span />
                        </div>
                        <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                            <li className="nav-item">
                                <a href="." className="nav-link logout" onClick={() => this.logout()}>
                                    <span className="d-none d-sm-inline">Déconnexion</span><i className="fa fa-sign-out" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
