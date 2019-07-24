import React  from "react";
import PropTypes from 'prop-types';
import ForcastItem from './ForcastItem';
// import transformForecast from './../services/transformForecast';
import './styles.css'

const renderForecastItemDays = (forecastData) => {
    return forecastData.map((forecast, index) => (
        <ForcastItem
            key={index}
            weekDay={forecast.weekDay}
            hour={forecast.hour}
            data={forecast.data}
        />
    )
    );
}

const renderProgress = () => {
    return <h3>Cargando pronostico extendido...</h3>;
};

const ForecastExtended = ({ city, forecastData }) => (

    <div>
        <h2 className="forecast-title">Pronóstico extendido para { city }</h2>
        { forecastData ? 
            renderForecastItemDays(forecastData) :
            renderProgress()    
        }
    </div>

);

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

export default ForecastExtended;