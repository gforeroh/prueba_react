import React, { Component } from "react";
import PropTypes from 'prop-types';
import ForcastItem from './ForcastItem';
import transformForecast from './../services/transformForecast';
import './styles.css'

/*
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'vientos',
};
*/

const api_key = "4719aaadd5a897738a7b34fbd603744c";
const url = `http://api.openweathermap.org/data/2.5/forecast`;

class ForecastExtended extends Component {
    constructor(){
        super();
        this.state = {
            forecastData: null
        }
    }

    componentDidMount() {
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;
        fetch(url_forecast)
            .then(resolve => {
                return resolve.json();
            })
            .then(weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                this.setState({forecastData});
            }
        );
    }

    renderForecastItemDays() {
        return <h2>Render Items</h2>;
        // return days.map((day, index) => (<ForcastItem weekDay={day} hour={12} key={index} data={data} />) );
    }

    renderProgress = () => {
        return <h3>Cargando pronostico extendido...</h3>;
    };

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;

        return (
            <div>
                <h2 className="forecast-title">Pronóstico extendido para { city }</h2>
                { forecastData ? 
                    this.renderForecastItemDays() :
                    this.renderProgress()    
                }
            </div>
        )
    }
};

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;