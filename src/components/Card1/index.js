import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 600,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} 
          style={{
              margin:'8px', 
              borderRadius:'15px 15px',
              }}>
      <CardActionArea href="https://richard2878.github.io/Trek/">
        <CardMedia 
          className={classes.media}
          image="https://github.com/richard2878/Richar-A-Portfolio/blob/main/src/images/Trek5.JPG?raw=true"
          title="Click here"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Project Trek
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <span>Description: Project TREK is an app where vendors can provide their information to store in a database where users can select vendors available  for service at an event.  Event attendees will need to input their information to receive the tickets required to attend the event.</span><br/><br/>  
          <span>Tech Used:  CSS, HTML, Bootstrap, API, JavaScript</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://github.com/rbraun04/Trek">
          GitHub Repository
        </Button>
      </CardActions>
    </Card>
  );
}

