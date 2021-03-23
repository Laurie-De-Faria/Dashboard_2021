// React Core
import React, { Component } from 'react';

import { getUserWidgets } from '../../backend/backend';
import { userId } from '../../constants/userInfos';
import { setupOutlookWidget } from '../../components/Microsoft/MicrosoftSetupWidgets';
import { setupCinemaWidget } from '../../components/Cinema/CinemaSetupWidgets';

import '../../styles/Dashboard.css';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listWidgets: []
        };
        this.createWidgetsList = this.createWidgetsList.bind(this);
        this.getWidget = this.getWidget.bind(this);
    }

    getWidget(serviceId, widgetId, isActive, data, id) {
        if (isActive !== 1) {
            return null;
        }
        switch(serviceId) {
            case 1:
                return setupOutlookWidget(widgetId, data, id);
            case 2:
                return setupCinemaWidget(widgetId, data, id);
            default:
                return null;
        }
    }

    createWidgetsList(widgets) {
        let list = [];

        if (widgets === undefined || widgets === {})
            return [];
        
        list = widgets.map((widget) => <div className='widgetBox'>{this.getWidget(widget.service_id, widget.widget_id, widget.is_active, widget.data, widget.id)}</div>)
        return list;
    }

    async componentDidMount() {
        const response = await getUserWidgets(userId);
        const widgets = this.createWidgetsList(response);

        this.setState({
            listWidgets: (widgets === [] || widgets === undefined ? [] : widgets)
        });
    }

    render() {
        const { listWidgets } = this.state;
        return (
            <div className='listWidgets'>
                { listWidgets }
            </div>
        );
    }
}
