import React, {useEffect, useState} from 'react'
import css from './Weather.module.css'
import {AutoComplete, Button, Card, Divider, Input, message, Tooltip} from 'antd'
import {SearchOutlined} from '@ant-design/icons'
import {app, weatherService} from '../../config'
import {getWeather} from '../../api'
import {WeatherIcon} from '../../components/WeatherIcon'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import {ISearchOptions, TWeather} from './Weather.types'
import {WeatherBody} from '../../components/WeatherBody'
import uniq from 'ramda/src/uniq'
import slice from 'ramda/src/slice'
import isEmpty from 'ramda/src/isEmpty'

const { Search } = Input;

dayjs.extend(relativeTime);

const Weather = () => {
    const [weather, setWeather] = useState<TWeather>(null);
    const [weatherLoader, setWeatherLoader] = useState<boolean>(false);
    const [weatherHistory, setWeatherHistory] = useState<string[]>([]);
    const [searchOptions, setSearchOptions] = useState<ISearchOptions>({
        dropdown: false,
        disabledButton: true
    });

    useEffect(() => {
        const _weatherHistory = localStorage.getItem('weatherHistory');

        if (_weatherHistory) setWeatherHistory(JSON.parse(_weatherHistory));
    }, []);

    const handleClickSearch = (value: string) => {
        setWeatherLoader(true);
        setSearchOptions({
            dropdown: false,
            disabledButton: false
        });

        getWeather(value)
            .then(response => {
                const _weatherHistory = slice(0, 10, uniq([value, ...weatherHistory]));

                setWeather(response.data);
                setWeatherLoader(false);
                setWeatherHistory(_weatherHistory);

                localStorage.setItem('weatherHistory', JSON.stringify(_weatherHistory));
            }).catch(e => {
                setWeather(null);
                setWeatherLoader(false);

                message.error('Something went wrong. Try again later.');
            });
    };

    const handleClickSponsored = () => {
        window.location.href = weatherService.links.site;
    };

    return (
        <section className={css.content}>
            <Card
                title={app.name}
                actions={[
                    <div onClick={handleClickSponsored}>Sponsored {weatherService.name}</div>
                ]}
                bordered={false}
            >
                <AutoComplete
                    options={weatherHistory.map((item) => ({value: item, label: item}))}
                    onSelect={handleClickSearch}
                    onFocus={() => setSearchOptions({ ...searchOptions, dropdown: true })}
                    onBlur={() => setSearchOptions({ ...searchOptions, dropdown: false })}
                    className={css.searchBox}
                    open={searchOptions.dropdown}
                >
                    {console.log(searchOptions.disabledButton)}
                    <Search
                        placeholder="Enter city"
                        enterButton={
                            <Button
                                icon={<SearchOutlined/>}
                                type="primary"
                                disabled={searchOptions.disabledButton}
                            />
                        }
                        onSearch={handleClickSearch}
                        onChange={({target}) => {
                            setSearchOptions({
                                dropdown: !isEmpty(target.value),
                                disabledButton: isEmpty(target.value)
                            })
                        }}
                    />
                </AutoComplete>
                <Divider>
                    <Tooltip title={weather?.weather[0].description} placement="bottom">
                            <span><WeatherIcon
                                type={weather?.weather[0].main || 'Clear'}
                                size={56}
                                loading={weatherLoader}
                            /></span>
                    </Tooltip>
                </Divider>
                <WeatherBody>{weather}</WeatherBody>
            </Card>
        </section>
    )
};

export { Weather }
