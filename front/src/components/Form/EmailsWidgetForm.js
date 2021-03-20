import React, { Component } from 'react';

import { addWidget } from '../../backend/backend';

class EmailsWidgetForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0
        };
        this.submitWidget = this.submitWidget.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }

    submitWidget() {
        const number = this.state.number;

        if (number === 0) {
            alert("Error: Can't create a widget with number equal to 0 emails to display");
            return;
        }

        const serviceId = 1;
        const widgetId = 1;
        const data = {
            number: number
        };
        addWidget(serviceId, widgetId, data);
    }

    onValueChange(event) {
        this.setState({
            number: event.target.value
        });
    }

    render() {
        const { number } = this.state;

        return(
            <div>
                <h1>Display last emails:</h1>
                <form>
                    <label>
                        Number of emails to display:
                        {/* <select value={number} onChange={this.onValueChange}>
                            { listFilms }
                        </select> */}
                        <input style={{width: '150px'}} type="number" value={this.state.number} onChange={this.onValueChange}/>
                    </label>
                    <button type="button" onClick={() => this.submitWidget()}>Add</button>
                </form>
            </div>
        );
    }
}

export default EmailsWidgetForm;