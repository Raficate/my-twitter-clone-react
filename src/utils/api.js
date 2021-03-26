import axios from 'axios';
import config from '../config.js';

export default axios.create({
  baseURL: config.baseURL_API
  //baseURL: 'http://localhost:5000' //Con proxy en package.json, "proxy": "http://localhosy:5000/"
});