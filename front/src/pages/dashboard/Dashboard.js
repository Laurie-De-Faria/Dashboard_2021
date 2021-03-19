// React Core
import React, { Component } from 'react';

import { getUserWidgets } from '../../backend/backend';
import { userId } from '../../constants/userInfos';
import { setupOutlookWidget } from '../../components/Microsoft/MicrosoftSetupWidgets';
import { setupCinemaWidget } from '../../components/Cinema/CinemaSetupWidgets';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listWidgets: []
        };
        this.createWidgetsList = this.createWidgetsList.bind(this);
        this.getWidget = this.getWidget.bind(this);
    }

    getWidget(serviceId, widgetId, isActive, data) {
        if (isActive !== 1) {
            return null;
        }
        switch(serviceId) {
            case 1:
                return setupOutlookWidget(widgetId, data);
            case 2:
                return setupCinemaWidget(widgetId, data);
            default:
                return null;
        }
    }

    createWidgetsList(widgets) {
        let list = [];

        console.log(JSON.stringify(widgets))
        if (widgets === undefined || widgets === {})
            return [];
        
        list = widgets.map((widget) => this.getWidget(widget.service_id, widget.widget_id, widget.is_active, widget.data))
        return list;
    }

    async componentDidMount() {
        const response = await getUserWidgets(userId);
        const widgets = this.createWidgetsList(response);

        console.log(widgets);

        this.setState({
            listWidgets: (widgets === [] || widgets === undefined ? [] : widgets)
        });
    }

    render() {
        const { listWidgets } = this.state;
        return (
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', alignContent: 'space-between' }}>
                { listWidgets }
            </div>
        );
    }
}
