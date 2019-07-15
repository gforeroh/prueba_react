import React from "react";
import PropTypes from 'prop-types'
import WeatherLocation from './WeatherLocation';
import './styles.css';

const LocationList = ({ cities, onSelectedLocation }) => { 
    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    };
    const strTocomponents = cities => (
        cities.map((city, index) => 
            (
                <WeatherLocation 
                    city={city} 
                    key={index}
                    onWeatherLocationClick={() => handleWeatherLocationClick(city) } 
                />)
            )
    );

    return(
        <div className="locationList">
            {strTocomponents(cities)}
        </div>
    )
}



LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func.isRequired
}


export default LocationList;