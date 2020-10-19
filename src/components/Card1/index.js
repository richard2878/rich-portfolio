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
          title="Project Trek"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Project Trek
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Tech Used:  CSS, HTML, Bootstrap, API, JavaScript
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

