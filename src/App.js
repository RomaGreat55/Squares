import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ControlColor from './components/controlColor'
import './App.css';

class App extends Component {

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <div id="root">

            <Route
              exact path="/"
              render={(props) => <ControlColor/>}
            />
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
