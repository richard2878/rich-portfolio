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
      <CardActionArea href="https://projectsmood.herokuapp.com/">
        <CardMedia
          className={classes.media}
          image="https://github.com/richard2878/Richar-A-Portfolio/blob/main/src/images/SMood1.jpg?raw=true"
          title="Click here"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            SMood Spotify Player
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span>Description:  Smood is a music player that uses Spotify API to play music with the mood of your choice.  There is also an option to search music by artist, album, and track.</span><br/><br/>
            <span>Tech Used:  REACT, CSS, HTML, Material UI, Bootstrap, Figma, Adobe Illustrator, Heroku</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://github.com/tpacba/project-smood">
          GitHub Repository
        </Button>
      </CardActions>
    </Card>
  );
}

