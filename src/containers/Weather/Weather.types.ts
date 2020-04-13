export interface IWeather {
    weather: [{
        id: number,
        main: string,
        description: string
    }],
    main: {
        temp: number,
        feels_like: number,
        pressure: number,
        humidity: number
    },
    wind: {
        speed: number,
        deg: number
    },
    clouds: {
        all: number
    },
    sys: {
        sunrise: number,
        sunset: number
    },
    timezone: number,
    name: string
}

export type TWeather = IWeather | null

export interface ISearchOptions {
    dropdown: boolean,
    disabledButton: boolean
}
