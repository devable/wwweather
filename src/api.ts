import axios from 'axios'
import {weatherService} from './config'

const weatherInstance = axios.create({
    baseURL: weatherService.links.api,
    timeout: 3000
});

type TMethod = 'get'|'GET';
const makeRequest = (method: TMethod, url: string, params: Object) => {
    return weatherInstance.request({
        method,
        url,
        params: {
            ...params,
            appid: weatherService.api.key,
            units: weatherService.units
            // lang: 'ru'
        }
    })
};

export const getWeather = async (city: string) => {
    return await makeRequest('GET', 'weather', {
        q: city
    });
};
