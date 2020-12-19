import axios from 'axios'

export const baseURL = 'http://45.77.42.88';
export * from './functionsAuth';
export * from './functionOrder';

export const setHeaders = {
    cryptotoken: localStorage.getItem('cryptotoken')
};

export const axiosInstance = axios.create({
    baseURL,
})

export const errorHandler = (err) => {
    if (err.response && err.response.data && err.response.data.message) {
        return err.response.data.message
    }else {
        return "Internal server error"
    }
};