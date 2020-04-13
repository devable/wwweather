interface IApp {
    name: string
}
export const app: IApp = {
    name: 'The wwweather'
};

interface IWeather {
    name: string,
    links: {
        site: string,
        api: string
    },
    api: {
        key: string
    },
    units: string
}
export const weatherService: IWeather = {
    name: 'OpenWeather',
    links: {
        site: 'https://openweathermap.org',
        api: 'http://api.openweathermap.org/data/2.5/'
    },
    api: {
        key: 'your_openweathermap_key'
    },
    units: 'metric'
};
