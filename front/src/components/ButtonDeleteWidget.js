import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { removeWidget } from '../backend/backend';

class ButtonDeleteWidget extends Component {
    constructor(props) {
        super(props);

        this.delete = this.delete.bind(this);
    }

    async delete() {
        console.log(`delete => ${this.props.widgetId} ${this.props.serviceId} ${JSON.stringify(this.props.data)}`);
        await removeWidget(this.props.serviceId, this.props.widgetId, this.props.data, this.props.widgetUniqueId);
    }

    render() {
        return(
            <button onClick={this.delete}><i className="fa fa-trash" /></button>
        );
    }
}

ButtonDeleteWidget.propTypes = {
    widgetUniqueId: PropTypes.number.isRequired,
    widgetId: PropTypes.number.isRequired,
    serviceId: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
};

export default ButtonDeleteWidget;