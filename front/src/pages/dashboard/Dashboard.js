// React Core
import React, { Component } from 'react';
import EmailsService from '../../components/Microsoft/EmailsWidget/EmailsWidget';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            widgets: {}
        };
    }

    render() {
        return (
            <div>
                <EmailsService number={23}/>
            </div>
        );
    }
}
