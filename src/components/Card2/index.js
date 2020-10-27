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
      <CardActionArea href="https://vast-ocean-17405.herokuapp.com/">
        <CardMedia
          className={classes.media}
          image="https://github.com/richard2878/Richar-A-Portfolio/blob/main/src/images/Magnem%20Opus.JPG?raw=true"
          title="Click here"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Project Magnem Opus
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span>Description: Project TREK is a choose your own adventure app. The app provides locations for hiking, eating, and meet-up place, uses the google map API to map the adventure.</span><br/><br/>

            <span>Tech Used: NodeJS, MySQL, CSS, HTML, Javascript, Bootstrap, Heroku</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://github.com/rbraun04/MagnusOpus">
          GitHub Repository
        </Button>
      </CardActions>
    </Card>
  );
}

