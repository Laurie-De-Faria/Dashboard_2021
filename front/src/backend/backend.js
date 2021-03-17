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
    return await callAPI(`${process.env.REACT_APP_API_URL}/oauth/connection`);
}

export async function getEmails(nbrEmails) {
    return await callAPI(`${process.env.REACT_APP_API_URL}/services/emails/${userId}/${nbrEmails}`);
}