import React from 'react'
import {windDirection} from '../../utils'
import dayjs from 'dayjs'
import css from '../../containers/Weather/Weather.module.css'
import {IProps} from './WeatherBody.types'

const WeatherBody = ({children}: IProps) => {
    return children ? (
        <div className={css.weatherBody}>
            <div>
                <div>Temperature</div>
                <div>{Math.round(children.main.temp)} ℃</div>
            </div>
            <div>
                <div>Feels like</div>
                <div>{Math.round(children.main.feels_like)} ℃</div>
            </div>
            <div>
                <div>Pressure</div>
                <div>{children.main.pressure} hPa</div>
            </div>
            <div>
                <div>Humidity</div>
                <div>{children.main.humidity} %</div>
            </div>
            <div>
                <div>Wind</div>
                <div>{children.wind.speed} meter/s, {windDirection(children.wind.deg)}</div>
            </div>
            <div>
                <div>Cloudiness</div>
                <div>{children.clouds.all} %</div>
            </div>
            <div>
                <div>Sunrise</div>
                <div>
                    {dayjs.unix(children.sys.sunrise).format('HH:mm')}
                    , {dayjs().to(dayjs.unix(children.sys.sunrise))}
                </div>
            </div>
            <div>
                <div>Sunset</div>
                <div>
                    {dayjs.unix(children.sys.sunset).format('HH:mm')}
                    , {dayjs().to(dayjs.unix(children.sys.sunset))}
                </div>
            </div>
        </div>
    ) : null
};

export { WeatherBody }
