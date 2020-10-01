import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import Typography from '@material-ui/core/Typography';
import { Chip } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useModal } from 'react-modal-hook';
import CreateReviewModal from '../components/CreateReviewModal';
import { getTrail } from '../store/trails';

const TrailDetail = ({ getTrailDispatch, trail }) => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    getTrailDispatch(id);
  }, [id]);

  const [showCreateReviewModal, hideCreateReviewModal] = useModal(({ in: open, onExited }) => (
    <CreateReviewModal id={id} open={open} onExited={onExited} onClose={hideCreateReviewModal} />
  ));

  if (!trail) return null;

  console.log('here');
  console.log(trail);

  return (
    <>
      <h1>{trail.name}</h1>
      <Carousel showArrows={true}>
        {/* onChange={onChange} */}
        {/* onClickItem={onClickItem} */}
        {/* onClickThumb={onClickThumb}> */}

        {trail.Photos.map(photo => (
          <div>
            <img src={photo.url} />
          </div>
        ))}
      </Carousel>

      <Chip color='primary' size='small' label={trail.difficulty} />

      <div>
        <div>
          <p>Length</p>
          <p>{trail.length}</p>
        </div>
        <div>
          <p>Elevation Gain</p>
          <p>{trail.elevationGain}</p>
        </div>
        <div>
          <p>Route Type</p>
          <p>{trail.routeType}</p>
        </div>
      </div>
      <div>
        {trail.Tags.map(tag => (
          <Chip color='default' size='small' label={tag.tag} />
        ))}
      </div>

      <Typography variant='body2' color='textSecondary' component='p'>
        {trail.overview}
      </Typography>

      <Button color='inherit' className='success button' href='/reviews/new'>
        Write Review
      </Button>
    </>
  );
};

{
  /* <Card className={classes.root}>
  <CardHeader title={data.name} />
  <CardHeader subheader={`${data.City.name}, ${data.City.state}`} />
  <CardMedia
    className={classes.media}
    image={data.Photos.length > 0 ? data.Photos[0].url : ''}
    title='Paella dish'
  />
  <CardContent>
    <Chip color='secondary' size='small' label={data.difficulty} />

    <div>
      <p>{`Length: ${data.length}  *  Elevation Gain: ${data.elevationGain}`}</p>
    </div>

    <Typography variant='body2' color='textSecondary' component='p'>
      {data.overview}
    </Typography>
    <br></br>
    <div>
      {data.Tags.map(tag => (
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
</Card>; */
}

export default function TrailDetailContainer() {
  const dispatch = useDispatch();
  const getTrailDispatch = id => dispatch(getTrail(id));
  const trail = useSelector(state => state.trails.current);
  return <TrailDetail getTrailDispatch={getTrailDispatch} trail={trail} />;
}
