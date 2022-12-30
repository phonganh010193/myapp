import axios from 'axios';

export const httpClient = axios.create({
  baseURL: `https://reqres.in/api/`,
  headers: {
    'Content-Type': 'application/json'
  }
});
