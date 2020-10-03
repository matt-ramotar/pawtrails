import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth';
import { Redirect } from 'react-router-dom';

import SearchInput from '../components/SearchInput';
import MenuAppBar from '../components/AppBar';
import SimpleSelect from '../components/Select';

export default function HomePage() {
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   dispatch(login(username, password));
  // };

  return (
    <>
      <MenuAppBar />
      <SearchInput></SearchInput>
      <SimpleSelect />
    </>
  );
}
