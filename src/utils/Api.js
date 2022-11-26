import Axios from 'axios';

/*
 * restVerify must be enqued from admin-class side.
 */
const Api = Axios.create({
    // baseURL: 'https://api',
    baseURL: 'http://127.0.0.1:5001/',
    headers: {
        'content-type': 'application/json',
        'Cache-Control': 'no-cache'
    }
});

export default Api;