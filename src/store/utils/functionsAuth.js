import { axiosInstance, setHeaders, errorHandler } from './index';

export const F_LOGIN = (data) => {
    return new Promise((res, rej) => {
        axiosInstance({url: '/users/login', method: 'POST', data})
            .then(({data}) => {
                res(data);
            })
            .catch(err => rej(errorHandler(err)))
    })
};

export const F_REGISTER = (data) => {
    return new Promise((res, rej) => {
        axiosInstance({url: '/users', method: 'POST', data})
            .then(({data}) => {
                let { message } = data;
                res(message);
            })
            .catch(err => rej(errorHandler(err)))
    })
};

export const F_READ_ME = () => {
    return new Promise((res, rej) => {
        axiosInstance({url: '/users/me', method: 'GET', headers: setHeaders})
            .then(({data}) => {
                res(data)
            })
            .catch(err => rej(errorHandler(err)))
    })
};
