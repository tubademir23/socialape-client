import React, {Component} from 'react';
// import ReactDOM from 'react-dom'
//material-ui color tools
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CreateMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeFile from './util/theme';
import jwtDeode from 'jwt-decode';



// import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import {Container, Row, Col} from 'reactstrap'
import login from './pages/login';
import signup from './pages/signup';
import home from './pages/home';

import Navbar from './components/Navbar';
  
import './App.css';
const token=localStorage.FBIdToken;

 if(token){
 const decodedToken=jwtDeode(token);
 console.log(decodedToken);
}
const theme = CreateMuiTheme(themeFile);
class App extends Component {
  render() {

    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Navbar> </Navbar>
              <div className="container">
                <Switch>
                  <Route  path="/signup" component={signup}></Route>
                  <Route  path="/login" component={login}></Route>
                  <Route  path="/" component={home}></Route>
                </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;
// 