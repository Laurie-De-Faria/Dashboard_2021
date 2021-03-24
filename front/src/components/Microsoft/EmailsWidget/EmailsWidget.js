import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getEmails } from '../../../backend/backend';
import { MINUTE_MS } from '../../../constants/time';

import Email from './Email';
import ButtonDeleteWidget from '../../ButtonDeleteWidget';

import '../../../styles/Widget.css';

class EmailsService extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emails: []
        };
        this.createEmailsList = this.createEmailsList.bind(this);
        this.refresh = this.refresh.bind(this);
        this.getData = this.getData.bind(this);
    }

    refresh() {
      const interval = setInterval(() => {
        console.log('Update: Emails refresh');
        this.getData();
      }, MINUTE_MS );

      return () => clearInterval(interval);
    }

    createEmailsList(emails) {
        let list = [];

        if (emails === undefined || emails === {})
            return [];
        
        list = emails.map((email) => <Email subject={email.subject} dateReceive={email.receivedDateTime} from={`${email.from.emailAddress.name} (${email.from.emailAddress.address})`}/>)
        return list;
    }

    async getData() {
        const response = await getEmails(this.props.number);
        const emails = this.createEmailsList(response.value);

        this.setState({
            emails: (emails === [] || emails === undefined ? [] : emails)
        });
    }

    async componentDidMount() {
        await this.getData();
        this.refresh();
    }

    render() {
        const { emails } = this.state;

        return(
            <div className='widget' style={{ maxHeight: '550px', maxWidth: '500px'}}>
                <div className='header'>
                    <h1>Your last {this.props.number} mails:</h1>
                    <ButtonDeleteWidget
                        widgetId={1}
                        serviceId={1}
                        data={{
                            number: this.props.number
                        }}
                        widgetUniqueId={this.props.id}
                    />
                </div>
                <div className='list'>
                    { emails }
                </div>
            </div>
        );
    }
}

EmailsService.propTypes = {
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
};

export default EmailsService;