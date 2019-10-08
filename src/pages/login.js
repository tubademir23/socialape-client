import React, {Component} from 'react'
// import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

import AppIcon from '../images/dtvico.ico';
import axios from 'axios';
//MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const styles={
    form:{
        textAlign:'center'
    },
    image:{
        margin: '20px auto 20px auto'
    },
    pageTitle:{
        margin:'10px auto 10px auto'
    },
    textField:{
        margin: '10px auto 10px auto'
    },
    button: {
        marginTop: 20 //'center',
    },
    customError: {
        color: 'red',
        fontSize: '0.8rem',
        marginTop: 10
      },
      progress: {
        position: 'absolute'
      }
};

class login extends Component {
    // two main way to get value form.
    //one is the reference get the values, the more poluer use in the state
    constructor(){
        super();
        this.state={
            email:'',
            password:'',
            loading:false,
            errors:{}
        };
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
          loading: true
        });

        const userData = {
          email: this.state.email,
          password: this.state.password
        };
        axios
          .post('/login', userData)
          .then((res) => {
            console.log(res.data);
            this.setState({
              loading: false
            });
            this.props.history.push('/');
          })
          .catch((err) => {
            this.setState({
              errors: err.response.data,
              loading: false
            });
          });
      };

    handleChange= (event)=>{
        this.setState({
            [event.target.name] : event.target.value
        });
    };
    render(){
        const {classes}= this.props;
        //work later
        const {loading, errors} = this.state;


        return (
            <Grid container className={classes.form} >
            <Grid item sm ></Grid>
            <Grid item sm >
               <img src={AppIcon} alt="dtv" className={classes.image}/>
               <Typography variant="h2" className={classes.pageTitle}>Login
               </Typography>
               <form noValidate onSubmit={this.handleSubmit}>
                    <TextField
                        id="email"
                        name="email"
                        type="email"
                        label="Email"
                        className={classes.textField}
                        helperText={errors.email}
                        error={errors.email ? true : false}
                        value={this.state.email}
                        onChange={this.handleChange}
                        fullWidth
                    />
                   <TextField 
                        id='password' 
                        name='password' 
                        type='password' 
                        label='Password' 
                        className={classes.textField} 
                        value={this.state.password} 
                        helperText={errors.password} 
                        error={errors.password ? true :false } 
                        onChange={this.handleChange} 
                        fullWidth/>
                   {errors.general && (
                        <Typography variant="body2" className={classes.customError}>
                            {errors.general}
                        </Typography>
                    )}
                   <Button 
                        type="submit" 
                        color="primary" 
                        variant="contained" 
                        className={classes.button}
                        disabled={loading}>
                    Login
                   </Button>
                   <br/>
                   <small>
                    dont have an account ? sign up <Link to="/signup">here</Link>
                    </small>
               </form>
            </Grid>
            <Grid item sm >
            
            </Grid>
        </Grid>
        )
    }
}

login.propTypes={
    classes: PropTypes.object.isRequired
};

export default withStyles(styles) (login);