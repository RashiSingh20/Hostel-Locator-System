import axios from 'axios';

const instance = axios.create({
    baseURL: "https://hostel-locator-system.herokuapp.com/api"
    // baseURL: "http://localhost:8000/api"
});

export default instance;