import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import LocationListContainer from './containers/LocationListContainer'
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

// import logo from './logo.svg';
import './App.css';

const cities = [
  'Choachí,col',
  'Bogota,col',
  'Cali,col',
  'Mexico,mex',
  'washington,us',
  'Barcelona,es',
];

class App extends Component {
  render(){
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
            <LocationListContainer
              cities={cities}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper></Paper> {/* zDepth={4} */}
            <div className="details">
              <ForecastExtendedContainer />
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default App;