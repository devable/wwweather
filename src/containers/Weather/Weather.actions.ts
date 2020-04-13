export const getWeatherHistory = () => ({
    type: 'GET_WEATHER_HISTORY',
    history: localStorage.getItem('weatherHistory')
});

export const setWeatherHistory = (history: any) => ({
    type: 'SET_WEATHER_HISTORY',
    history: localStorage.setItem('weatherHistory', JSON.stringify(history))
});
