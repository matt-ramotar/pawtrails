import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { saveToList } from '../store/lists';

const FavoriteButton = ({ userId, trailId, saveToFavoritesDispatcher }) => {
  const handleClick = async e => {
    e.preventDefault();
    console.log(userId, trailId);
    saveToFavoritesDispatcher({ userId, trailId, listName: 'favorites' });
  };

  return (
    <IconButton aria-label='Add to favorites' onClick={handleClick}>
      <FavoriteIcon />
    </IconButton>
  );
};

export default function FavoriteButtonContainer() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.data);
  const trail = useSelector(state => state.trails.current);

  const saveToFavoritesDispatcher = data => dispatch(saveToList(data));

  return (
    <FavoriteButton
      userId={user.id}
      trailId={trail.id}
      saveToFavoritesDispatcher={saveToFavoritesDispatcher}
    />
  );
}
