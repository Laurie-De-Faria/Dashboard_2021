import React from 'react';

import EmailsService from '../../components/Microsoft/EmailsWidget/EmailsWidget';
import EventsService from '../../components/Microsoft/CalendarWidget/EventsWidget';

export function setupOutlookWidget(widgetId, data, id, actionRemove) {
    switch(widgetId) {
        case 1:
            return setupEmailsWidget(data, id, actionRemove);
        case 2:
            return setupCalendarWidget(data, id, actionRemove);
        default:
            return null;
    }
}

function setupEmailsWidget(data, id, actionRemove) {
    return <EmailsService number={data.number} id={id} actionRemove={actionRemove}/>;
}

function setupCalendarWidget(data, id, actionRemove) {
    return <EventsService startDate={data.startDate} endDate={data.endDate} id={id} actionRemove={actionRemove}/>;
}