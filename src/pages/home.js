import React, {Component} from 'react'
 import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { thisExpression } from '@babel/types';
import Scream from '../components/Scream.js';
class home extends Component {
    state= {
        screams:null
    }
    componentDidMount(){

        axios.get('/screams')
        .then(res=> {
            console.log(res.data)
            this.setState({
                screams:res.data
            })
        })
        .catch(err => console.log(err));
    }
    render(){
        let recentScreamsMarkup= this.state.screams ? (
            this.state.screams.map(scream=><Scream key={scream.screamId} scream={scream}/>)
        ) :<p>Loading..</p>
        return (
            <div>
               <Grid container spacing={16}>
                   <Grid item sm={8} xs={12}>
                       {recentScreamsMarkup}
                   </Grid>
                   <Grid item sm={4} xs={12}>
                       <p>profil</p>
                   </Grid>
               </Grid>
            </div>
        )
    }
}

export default home;