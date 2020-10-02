import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { logout } from '../store/auth';

const LogoutButton = ({ loggedOut, logoutDispatcher }) => {
  const handleClick = () => {
    console.log('logging out');
    logoutDispatcher();
  };

  // if (loggedOut) {
  //   return <Redirect to='/login' />;
  // }

  return (
    <div id='logout-button-holder'>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

const LogoutButtonContainer = () => {
  const dispatch = useDispatch();
  const logoutDispatcher = () => dispatch(logout());
  const loggedOut = useSelector(state => !state.auth.jti);

  return <LogoutButton loggedOut={loggedOut} logoutDispatcher={logoutDispatcher} />;
};

export default LogoutButtonContainer;
