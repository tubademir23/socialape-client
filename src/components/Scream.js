import React, {Component} from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import {Link} from 'react-router-dom/Link'
//MUI card components..
import Card from '@material-ui/core/Card';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'

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
    },
    image:{
        minWidth:200,
        
    },
    content:{
        padding:25,
        objectFit:'cover'
    }
}
// same as props 
class Scream extends Component {
    render(){
        dayjs.extend(relativeTime);
        const {classes, 
                scream: {body, createdAt, userImage, userHandle, screamId, likeCount, commentCount}} = this.props
        //const classes=this.props
        return (
            <Card className={classes.card}>
                <CardMedia
                    image= {userImage} 
                    title= "Profile image" className={classes.image}> </CardMedia>
                <CardContent class={classes.content}>
                    <Typography 
                    variant="h5" 
                    component={Link} 
                    to={`/users/${userHandle}`}
                    color="primary"

                    >{userHandle} &nbsp;
                    <Typography variant="caption" color="primary">{likeCount} &nbsp; {commentCount} </Typography>
                    </Typography>
                    <Typography variant="overline" color="textPrimary">{screamId}</Typography>
                    <Typography variant="body1" color="textSecondary">{body}</Typography>
                    <Typography variant="subtitle2" color="textSecondary">{dayjs(createdAt).fromNow()}</Typography>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(Scream)