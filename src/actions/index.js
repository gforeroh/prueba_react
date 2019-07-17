import transformForecast from './../services/transformForecast'

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const setCity = payload => ({ type: SET_CITY, payload });
export const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });


const api_key = "4719aaadd5a897738a7b34fbd603744c";
const url = `http://api.openweathermap.org/data/2.5/forecast`;

export const setSelectedCity = payload => {
    return dispatch => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

        // activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload))

        return fetch(url_forecast).then(
            resolve => (resolve.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);

                // modificae el estado con el resultado de la promise
                dispatch(setForecastData({ city: payload, forecastData }));
            }
        );
    }
}