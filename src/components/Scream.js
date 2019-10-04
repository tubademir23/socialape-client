import React, {Component} from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import Link from 'react-router-dom/Link'
//MUI card components..
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// import Grid from '@material-ui/core/Grid';
const styles={
    card:{
        display:'flex',
        marginButtom:20
    }
}
// same as props
class Scream extends Component {
    render(){
        const {classes, 
                scream: {body, createdAt, userImage, userHandle, screamId, likeCount, commentCount}} = this.props
        //const classes=this.props
        return (
            <Card>
                <p><CardMedia
                    image= {userImage} 
                    title= "Profile image"> tt</CardMedia></p>
                
                <CardContent>
                    <Typography 
                    variant="h5" 
                    component={Link} 
                    to={`/users/${userHandle}`}
                    color="primary"

                    >{userHandle}</Typography>
                    <Typography variant="body2" color="textSecondary">{createdAt}</Typography>
                    <Typography variant="body1" color="textSecondary">{body}</Typography>
                    <Typography variant="body2" color="textSecondary">{createdAt}</Typography>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(Scream)