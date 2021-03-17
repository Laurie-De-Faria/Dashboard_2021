// TO DO -> transform to class User
let userId;
let userEmail;
let userName;
let accessToken;

export function setUserInfos(username, email, id) {
    userEmail = `${email}`;
    userId = `${id}`;
    userName = `${username}`;
}

export function resetUserInfos() {
    userEmail = '';
    userId = '';
    userName = '';
    accessToken = '';
}

export function setAccessToken(accessToken) {
    accessToken = `${accessToken}`;
}

export { userId, userEmail, userName, accessToken };