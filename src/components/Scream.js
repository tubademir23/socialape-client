import React, {Component} from 'react'
import withStyles from '@material-ui/core/styles/withStyles';

// import Grid from '@material-ui/core/Grid';
const styles={
    card:{
        display:'flex'
    }
}
class Scream extends Component {
    render(){
        const {classes} = this.props
        //const classes=this.props
        return (
            <div>
                <h1>
                    screams page
                </h1>
              
            </div>
        )
    }
}

export default withStyles(styles)(Scream)