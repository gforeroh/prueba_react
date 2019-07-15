import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationList from './components/LocationList'
import ForecastExtended from './components/ForecastExtended';
// import logo from './logo.svg';
import './App.css';

const cities = [
  'Bogota, col',
  'Cali, col',
  'Mexico, mex',
  'washington, us',
  'Barcelona, es',
]

class App extends Component {
  constructor() {
    super();

    this.state = {
      city: null
    }
  }

  handleSelectedLocation = city => {
    // console.log(`handleSelectedLocation - ${city}`);
    this.setState({ city });
  };

  render(){
    const { city } = this.state;
    return(
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography color="inherit"> {/* variant='title'  */}
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList 
              cities={cities} 
              onSelectedLocation={this.handleSelectedLocation }
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper></Paper> {/* zDepth={4} */}
            <div className="details">
              { !city ? 
                null :
                <ForecastExtended city={ city } />
              }
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}


export default App;
