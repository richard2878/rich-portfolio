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
      <CardActionArea href="https://richard2878.github.io/Week4-Quiz/">
        <CardMedia
          className={classes.media}
          image="https://github.com/richard2878/Richar-A-Portfolio/blob/main/src/images/SW%20Quiz.JPG?raw=true"
          title="Click here"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Starwars Quiz
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span>Description: A quiz related to Star Wars characters. Includes a timer per question and a counter for correct/wrong answers.</span><br/><br/>
            <span>Tech Used: HTML, CSS, JavaScript, Bootstrap, Terminal, GitHub, NodeJS</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          GitHub Repository
        </Button>
      </CardActions>
    </Card>
  );
}

