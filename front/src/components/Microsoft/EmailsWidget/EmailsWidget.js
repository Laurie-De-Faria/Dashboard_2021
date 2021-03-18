import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getEmails } from '../../../backend/backend';

import Email from './Email';

class EmailsService extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emails: []
        };
        this.createEmailsList = this.createEmailsList.bind(this);
    }

    createEmailsList(emails) {
        let list = [];

        if (emails === undefined || emails === {})
            return [];
        
        list = emails.map((email) => <Email subject={email.subject} dateReceive={email.receivedDateTime} from={`${email.from.emailAddress.name} (${email.from.emailAddress.address})`}/>)
        return list;
    }

    async componentDidMount() {
        const response = await getEmails(this.props.number);
        const emails = this.createEmailsList(response.value);

        this.setState({
            emails: (emails === [] || emails === undefined ? [] : emails)
        });
    }

    render() {
        const { emails } = this.state;

        return(
            <div>
                <h1>Your last {this.props.number} mails:</h1>
                <div style={{ overflow: 'auto', maxHeight: '500px', maxWidth: '500px'}}>
                    { emails }
                </div>
            </div>
        );
    }
}

EmailsService.propTypes = {
    number: PropTypes.number.isRequired,
};

export default EmailsService;