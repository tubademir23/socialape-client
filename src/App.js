import React, {Component} from 'react';
import ReactDOM from 'react-dom'

// import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
// import {Container, Row, Col} from 'reactstrap'
import login from './pages/login';
import signup from './pages/signup';
import home from './pages/home';
import Navbar from './components/Navbar';
  
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Router>
          <Navbar></Navbar>
            <div className="container">
              <Switch>
                <Route exact path="/" component={home}> </Route>
                <Route path="/signup" component={signup}></Route>
                <Route path="/login" component={login}></Route>
              </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

 export default App;
// 