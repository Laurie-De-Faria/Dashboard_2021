import { userId } from '../constants/userInfos';

async function callAPI(url, init={}) {
    init = Object.assign(init, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const response = await fetch(url, init);
    const jsonData = await response.json();

    return jsonData;
}

export async function getUser(username) {
    return await callAPI(`${process.env.REACT_APP_API_URL}/users/mail/${username}`);
}

export async function addUser(username, email, password) {
    return await callAPI(`${process.env.REACT_APP_API_URL}/users/add`, {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            mail: email,
            password: password,
        }),
    })
}

export async function loginService() {
    return await callAPI(`${process.env.REACT_APP_API_URL}/oauth/${userId}/connection`);
}

export async function getEmails(nbrEmails) {
    return await callAPI(`${process.env.REACT_APP_API_URL}/services/emails/${userId}/${nbrEmails}`);
}

export async function getCalendar(startDate, endDate) {
    return await callAPI(`${process.env.REACT_APP_API_URL}/services/calendar/${userId}/${startDate}/${endDate}`);
}

export async function getSimilarFilms(filmId) {
    return await callAPI(`${process.env.REACT_APP_API_URL}/services/cinema/similar/${filmId}`);
}

export async function getVideosOfFilm(filmId) {
    return await callAPI(`${process.env.REACT_APP_API_URL}/services/cinema/videos/${filmId}`);
}

export async function getUserWidgets(userId) {
    return await callAPI(`${process.env.REACT_APP_API_URL}/services/widgets/${userId}`);
}

export async function addWidget(serviceId, widgetId, data) {
    return await callAPI(`${process.env.REACT_APP_API_URL}/services/widgets/add`, {
        method: 'POST',
        body: JSON.stringify({
            fk_user_id: userId,
            service_id: serviceId,
            widget_id: widgetId,
            is_active: 1,
            data: data,
        }),
    })
}

export async function removeWidget(serviceId, widgetId, data, widgetUniqueId) {
    return await callAPI(`${process.env.REACT_APP_API_URL}/services/widgets/remove`, {
        method: 'DELETE',
        body: JSON.stringify({
            id: widgetUniqueId,
            fk_user_id: userId,
            service_id: serviceId,
            widget_id: widgetId,
            is_active: 1,
            data: data,
        }),
    })
}

export async function getPopularFilm() {
    return await callAPI(`${process.env.REACT_APP_API_URL}/services/cinema/popular`);
}