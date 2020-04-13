import React from 'react'
import { WiDaySunny, WiCloud, WiRain, WiNa, WiSnow, WiThunderstorm } from 'react-icons/wi'
import { weatherIcon } from './WeatherIcon.module.css'
import { IWeatherIcon } from './WeatherIcon.types'

const WeatherIcon = ({ type, size = 24, loading }: IWeatherIcon) => {
    switch (type) {
        case 'Clear':
            return <WiDaySunny className={`${weatherIcon}${loading ? ' spin' : ''}`} size={size} />;
            break;

        case 'Clouds':
            return <WiCloud className={`${weatherIcon}${loading ? ' swing' : ''}`} size={size} />;
            break;

        case 'Rain':
            return <WiRain className={`${weatherIcon}${loading ? ' swing' : ''}`} size={size} />;
            break;

        case 'Thunderstorm':
            return <WiThunderstorm className={`${weatherIcon}${loading ? ' swing' : ''}`} size={size} />;
            break;

        case 'Drizzle':
            return <WiSnow className={`${weatherIcon}${loading ? ' swing' : ''}`} size={size} />;
            break;

        case 'Snow':
            return <WiSnow className={`${weatherIcon}${loading ? ' swing' : ''}`} size={size} />;
            break;

        default:
            return <WiNa className={`${weatherIcon}${loading ? ' swing' : ''}`} size={size} />;
            break;
    }
};

export { WeatherIcon }
