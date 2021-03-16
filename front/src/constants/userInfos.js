// TO DO -> transform to class User
let userId;
let userEmail;
let userName;

export function setUserInfos(username, email, id) {
    userEmail = `${email}`;
    userId = `${id}`;
    userName = `${username}`;
}

export function resetUserInfos() {
    userEmail = '';
    userId = '';
    userName = '';
}

export { userId, userEmail, userName };