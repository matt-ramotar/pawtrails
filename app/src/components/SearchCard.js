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
    maxWidth: 345,
  },
  media: {
    height: 140,
    paddingTop: '56.25%', // 16:9
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

      <CardMedia
        className={classes.media}
        image={trail.Photos.length > 0 ? trail.Photos[0].url : ''}
      />
      <CardContent>
        <Chip
          color={
            trail.difficulty === 'easy'
              ? 'default'
              : trail.difficulty === 'moderate'
              ? 'primary'
              : 'secondary'
          }
          size='small'
          label={trail.difficulty}
        />

        <div>
          <p>{`Length: ${trail.length}`}</p>
          <p>{`Elevation Gain: ${trail.elevationGain}`}</p>
        </div>

        <Typography variant='body2' color='textSecondary' component='p'>
          {trail.overview}
        </Typography>
      </CardContent>
    </Card>
  );
}
