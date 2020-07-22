import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-28ad4.firebaseio.com/'
})

export default instance;