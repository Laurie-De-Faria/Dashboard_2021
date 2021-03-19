import React from 'react';

import EmailsService from '../../components/Microsoft/EmailsWidget/EmailsWidget';
import EventsService from '../../components/Microsoft/CalendarWidget/EventsWidget';

export function setupOutlookWidget(widgetId, data) {
    switch(widgetId) {
        case 1:
            return setupEmailsWidget(data);
        case 2:
            return setupCalendarWidget(data);
        default:
            return null;
    }
}

function setupEmailsWidget(data) {
    return <EmailsService number={data.number}/>;
}

function setupCalendarWidget(data) {
    return <EventsService startDate={data.startDate} endDate={data.endDate}/>;
}