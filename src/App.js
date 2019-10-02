import React from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Container, Row, Col} from 'reactstrap'
import login from './pages/login';
import signup from './pages/signup';
import home from './pages/home';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
     
          <Router>
            <Navbar>
            <Switch>
              <Route exact path="/" component={home}>
              </Route>
          
              <Route exact path="/signup" component={signup}>
              </Route>
          
              <Route exact path="/login" component={login}>
              </Route>
            </Switch>
            </Navbar>
          </Router>
    </div>
  );
}

export default App;
