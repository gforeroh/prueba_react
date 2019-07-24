import React from "react";
import PropTypes from 'prop-types'
import WeatherLocation from './WeatherLocation';
import './styles.css';

const LocationList = ({ cities, onSelectedLocation }) => { 
    const handleWeatherLocationClick = payload => {
        const { name } = payload;
        // console.log("handleWeatherLocationClick");
        onSelectedLocation(name);
    };
    const strTocomponents = cities => (
        cities.map(city => 
            (
                <WeatherLocation 
                    key={city.key}
                    city={city.name} 
                    onWeatherLocationClick={() => handleWeatherLocationClick(city) } 
                    data={ city.data }
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