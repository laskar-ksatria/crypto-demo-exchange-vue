import { axiosInstance, errorHandler, setHeaders } from './index';

export const F_READ_MY_ORDER = () => {
    return new Promise((res, rej) => {
        axiosInstance({url: "/trade/mytrade", method: 'GET', headers: setHeaders})
            .then(({data}) => {
                res(data)
            })
            .catch(err => rej(errorHandler(err)))
    })
};

export const F_CREATE_ORDER = (data) => {
    return new Promise((res, rej) => {
        axiosInstance({url: '/trade', data,method: 'POST', headers: setHeaders})
            .then(({data}) => {
                res(data)
            })
            .catch(err => rej(errorHandler(err)))
    })
};


export const F_GET_PRICES = () => {
    return new Promise((res, rej) => {
        axiosInstance({url: "/getprices", method: "GET"})
            .then(({data}) => {
                res(data)
            })
            .catch(err => rej(errorHandler(err)))
    })
};

export const F_CLOSE_ORDER = (id, data,allOrders) => {
    return new Promise ((res, rej) => {
        axiosInstance({url: `/updatetrade/${id}`,data,method: 'POST', headers: setHeaders})
            .then(({data}) => {
                let { message, balance } = data;
                let lastOrders = allOrders.filter(item => {
                    return item._id !== id
                })
                res({message, orders: lastOrders, balance})
            })
            .catch(err => rej(errorHandler(err)))
    })
}