// React Core
import React, { Component } from 'react';
import { getEmails } from '../../backend/backend';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emails: {}
        };
    }

    async componentDidMount() {
        const newEmails = getEmails();

        this.setState({
            emails: newEmails,
        });
    }

    render() {
        const { emails } = this.state;
        return (
            <div>
                { emails }
            </div>
        );
    }
}
