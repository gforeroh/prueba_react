import transformForecast from './../services/transformForecast'
import transformWeather from './../services/transformWeather'
import getUrlWeatherByCity from './../services/getUrlWeatherByCity';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

export const setCity = payload => ({ type: SET_CITY, payload });
export const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

export const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload });
export const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload });


const api_key = "4719aaadd5a897738a7b34fbd603744c";
const url = `http://api.openweathermap.org/data/2.5/forecast`;

export const setSelectedCity = payload => {
    return (dispatch, getState ) => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

        // activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));

        const state = getState();
        const date = state.cities[payload] && state.cities[payload].forecastDataDate;

        const now = new Date();

        if(date && (now - date) < 1 * 60 * 1000 ){
            return;
        }

        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                // console.log(forecastData);
                
                // modificae el estado con el resultado de la promise
                dispatch(setForecastData({ city: payload, forecastData }));
            }
        );
    }
}

export const setWeather = payload => {
    return dispatch => {
        payload.forEach(city => {
            dispatch(getWeatherCity(city));
            const api_weather = getUrlWeatherByCity(city);
            fetch(api_weather)
                .then(data => {
                    return data.json();
                }).then(weather_data => {
                    const weather = transformWeather(weather_data);
                    dispatch(setWeatherCity({ city, weather }));
                });
        })
    }
}