import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import Typography from '@material-ui/core/Typography';
import { Chip } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useModal } from 'react-modal-hook';
import CreateReviewModal from '../components/CreateReviewModal';
import { getTrail } from '../store/trails';
import CreateReviewFormContainer from '../components/CreateReviewForm.js';
import { useGoogleMaps } from 'react-hook-google-maps';
import FavoriteButtonContainer from '../components/FavoriteButton';

const TrailDetail = ({ getTrailDispatch, trail, user, google, location, lat, lng }) => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  console.log(lat, lng);

  // console.log(trail.lat);
  // console.log(trail.lng);

  useEffect(() => {
    getTrailDispatch(id);
  }, [id]);

  const [showCreateReviewModal, hideCreateReviewModal] = useModal(({ in: open, onExited }) => (
    <CreateReviewModal id={id} open={open} onExited={onExited} onClose={hideCreateReviewModal} />
  ));

  const { ref, map, googleAPIObj } = useGoogleMaps(
    google,

    {
      center: { lat: Number(lat), lng: Number(lng) },
      zoom: 10,
    }
  );

  if (!trail) return null;

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

      <NavLink
        to='/reviews/new'
        trailId={trail.id}
        type='button'
        userId={user.id}
        render={() => <CreateReviewFormContainer></CreateReviewFormContainer>}>
        Write Review
      </NavLink>

      <div ref={ref} style={{ width: 400, height: 300 }} />

      <FavoriteButtonContainer />
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
  const google = process.env.REACT_APP_GOOGLE_API_KEY;
  console.log(google);

  const trail = useSelector(state => state.trails.current);
  const user = useSelector(state => state.auth.data);
  return (
    <TrailDetail
      getTrailDispatch={getTrailDispatch}
      trail={trail}
      user={user}
      google={google}
      lat={trail ? trail.lat : null}
      lng={trail ? trail.lng : null}
    />
  );
}
