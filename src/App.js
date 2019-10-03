import React, {Component} from 'react';
// import ReactDOM from 'react-dom'
//material-ui color tools
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CreateMuiTheme from '@material-ui/core/styles/createMuiTheme';
// import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
// import {Container, Row, Col} from 'reactstrap'
import login from './pages/login';
import signup from './pages/signup';
import home from './pages/home';
import Navbar from './components/Navbar';
  
import './App.css';
 
const theme = CreateMuiTheme({
  palette: {
    primary: {
      light: '#56b5b8',
      main: '#188588',
      dark: '#00585b',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffffff',
      main: '#e2f1f1',
      dark: '#b0bebe',
      contrastText: '#000000',
    },
  },
});
class App extends Component {
  render() {

    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Navbar> </Navbar>
              <div className="container">
                <Switch>
                  <Route exact path="/" component={home}> </Route>
                  <Route path="/signup" component={signup}></Route>
                  <Route path="/login" component={login}></Route>
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