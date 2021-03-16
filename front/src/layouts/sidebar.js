/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Sidebar extends Component {
    /*
    ** This function is used to map the data of the user
    ** and allows us to stub data when store isnt initialized
    */
    mapUserData() {
        const { user } = this.props;
        return Object.assign({
            first_name: '',
            last_name: '',
            roles: [],
        }, user || {});
    }

    render() {
        const userData = this.mapUserData();
        return (
            <nav className="side-navbar">
                <div className="sidebar-header d-flex align-items-center">
                    <div className="title">
                        <h1 className="h4">
                            {userData.first_name} {userData.last_name}
                        </h1>
                        <p>{userData.roles.join(',')}</p>
                    </div>
                </div>
                <ul className="list-unstyled">
                    <li><Link to="/"><i className="fa fa-home" />Dashboard</Link></li>
                    <li><Link to="/add"><i className="fa fa-home" />Add Widget</Link></li>
                    <li><Link to="/settings"><i className="fa fa-home" />Settings</Link></li>
                </ul>
            </nav>
        );
    }
}

Sidebar.propTypes = {
    user: PropTypes.object,
};

Sidebar.defaultProps = {
    user: {},
};

export default Sidebar;
