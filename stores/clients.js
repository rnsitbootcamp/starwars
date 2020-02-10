import axios from 'axios';
import { BASE_URL } from '../constants/apis';

const createClient = (baseURL) => axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Version': '1.0'
  },
});

const clients = {
  default: {
    client: createClient(BASE_URL),
  },
};

export default clients;
