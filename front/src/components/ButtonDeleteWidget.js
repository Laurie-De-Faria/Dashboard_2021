import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { removeWidget } from '../backend/backend';

import '../styles/ButtonDelete.css';

class ButtonDeleteWidget extends Component {
    constructor(props) {
        super(props);

        this.delete = this.delete.bind(this);
    }

    async delete() {
        if (this.props.action !== undefined) {
            this.props.action(this.props.widgetUniqueId)
        }
        await removeWidget(this.props.serviceId, this.props.widgetId, this.props.data, this.props.widgetUniqueId);
    }

    render() {
        return(
            <button className="button" onClick={this.delete}><i className="fa fa-trash" /></button>
        );
    }
}

ButtonDeleteWidget.propTypes = {
    widgetUniqueId: PropTypes.number.isRequired,
    widgetId: PropTypes.number.isRequired,
    serviceId: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    action: PropTypes.func
};

export default ButtonDeleteWidget;