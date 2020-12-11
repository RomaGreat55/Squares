import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ControlColor from './components/controlColor'
import Genarray from './components/main-array'
import Reshator from './components/Equation'
import ImageSelector from './components/ImageSelector'
import AutoDon from './components/index'
import Anvil from './components/hwmAnvil'
import './App.css';

class App extends Component {

  render() {
    //render={(props) => <ControlColor/>}
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <div id="root">
            <Switch>
              <Route
                exact path="/"
                render={(props) => <Anvil {...props} />}
              />
              <Route
                exact path="/resh"
                render={(props) => <Reshator {...props} />}
              />              
              <Route
                exact path="/imagesel"
                render={(props) => <ImageSelector {...props} />}
              />                            
              <Route
                exact path="/genarr"
                render={(props) => <Genarray {...props} />}
              />                                          
            </Switch>

          </div>
        </div>
      </Router>
    )
  }
}


// import React, { useState } from 'react';


// import Toast from 'react-bootstrap/Toast';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// const bgColorbtn ={backgroundColor: 'green'};

// const App = () => (
// <Container fluid>
//   <Row>
//     <Col xs={1} style={bgColorbtn} className = "back">
//     <Button>Test</Button>
//     </Col>
//     <Col xs={6}>2 of 3 (wider)</Col>
//     <Col>3 of 3</Col>
//   </Row>
//   <Row>
//     <Col>1 of 3</Col>
//     <Col xs={5}>2 of 3 (wider)</Col>
//     <Col>3 of 3</Col>
//   </Row>
// </Container>
// );

export default App;
