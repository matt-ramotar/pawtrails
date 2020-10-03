import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Chip } from '@material-ui/core';
import { Redirect, useHistory, Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function SearchCard({ trail, city }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const history = useHistory();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = e => {
    e.preventDefault();
    history.push(`/trails/${trail.id}`);
  };

  console.log('search card', trail.name, city.name);

  if (!trail.name) return null;

  return (
    <Card onClick={handleClick} className={classes.root}>
      <CardHeader title={trail.name} />
      <CardHeader subheader={`${city.name}, ${city.state}`} />
      <CardMedia
        className={classes.media}
        image={trail.Photos.length > 0 ? trail.Photos[0].url : ''}
        title='Paella dish'
      />
      <CardContent>
        <Chip color='secondary' size='small' label={trail.difficulty} />

        <div>
          <p>{`Length: ${trail.length}  *  Elevation Gain: ${trail.elevationGain}`}</p>
        </div>

        <Typography variant='body2' color='textSecondary' component='p'>
          {trail.overview}
        </Typography>
        <br></br>
        <div>
          {trail.Tags.map(tag => (
            <Chip color='primary' size='small' label={tag.tag} />
          ))}
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'>
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent></CardContent>
      </Collapse>
    </Card>
  );
}
