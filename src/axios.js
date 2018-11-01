import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://nodal-descent-204107.firebaseio.com/'
});

export default instance;