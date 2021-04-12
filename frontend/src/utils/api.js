import axios from 'axios';
import { toast } from 'react-toastify';

const { API_BASE_URL: apiBaseURL } = process.env;

const myAxios = axios.create({
  baseURL: apiBaseURL,
});

myAxios.interceptors.response.use((response) => {
  if (response.status >= 400) {
    toast.error('Falha na Requisição.');
  }
  return response;
});

export default myAxios;
