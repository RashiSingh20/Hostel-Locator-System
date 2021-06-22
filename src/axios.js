import axios from 'axios';

const instance = axios.create({
    baseURL: "https://hostel-locator-system.herokuapp.com/api"
});

export default instance;