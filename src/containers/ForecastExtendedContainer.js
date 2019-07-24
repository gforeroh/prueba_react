import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getForcastDataFromCities, getCity } from "./../reducers";
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
    render() {
        const { city, forecastData } = this.props;
        return (
            city &&
            <ForecastExtended city={city} forecastData={forecastData} />
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
};

const mapSateteToProps = state => ({ city: getCity(state), forecastData: getForcastDataFromCities(state) });

export default connect(mapSateteToProps, null)(ForecastExtendedContainer);