import React, { Component } from 'react';

import { addWidget } from '../../backend/backend';

class CalendatFilmsWidgetForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: '',
            endDate: ''
        };
        this.submitWidget = this.submitWidget.bind(this);
        this.onStartValueChange = this.onStartValueChange.bind(this);
        this.onEndValueChange = this.onEndValueChange.bind(this);
    }

    submitWidget() {
        const { startDate, endDate } = this.state;

        if (startDate === '' || endDate === '') {
            alert("Error: Select start and end date");
            return;
        }

        const serviceId = 1;
        const widgetId = 2;
        const data = {
            startDate: `${startDate}T19:00:00-08:00`,
            endDate: `${endDate}T19:00:00-08:00`
        };
        addWidget(serviceId, widgetId, data);
    }

    onStartValueChange(event) {
        this.setState({
            startDate: event.target.value
        });
    }

    onEndValueChange(event) {
        this.setState({
            endDate: event.target.value
        });
    }

    render() {
        const { startDate, endDate } = this.state;

        return(
            <div>
                <h1>Display events of your Outlook calendar:</h1>
                <form>
                    <label>
                        Start date:
                        <input style={{width: '150px'}} type="date" value={startDate} onChange={this.onStartValueChange}/>
                    </label>
                    <label>
                        End date:
                        <input style={{width: '150px'}} type="date" value={endDate} onChange={this.onEndValueChange}/>
                    </label>
                    <button type="button" onClick={() => this.submitWidget()}>Add</button>
                </form>
            </div>
        );
    }
}

export default CalendatFilmsWidgetForm;