import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-8d54c.firebaseio.com/'
});

export default instance;