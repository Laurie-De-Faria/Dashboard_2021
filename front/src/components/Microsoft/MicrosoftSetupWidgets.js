import React from 'react';

import EmailsService from '../../components/Microsoft/EmailsWidget/EmailsWidget';
import EventsService from '../../components/Microsoft/CalendarWidget/EventsWidget';

export function setupOutlookWidget(widgetId, data, id) {
    switch(widgetId) {
        case 1:
            return setupEmailsWidget(data, id);
        case 2:
            return setupCalendarWidget(data, id);
        default:
            return null;
    }
}

function setupEmailsWidget(data, id) {
    return <EmailsService number={data.number} id={id}/>;
}

function setupCalendarWidget(data, id) {
    return <EventsService startDate={data.startDate} endDate={data.endDate} id={id}/>;
}