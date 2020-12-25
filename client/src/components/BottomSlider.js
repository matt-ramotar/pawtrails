import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BottomNavigation } from '@material-ui/core';
import filterTrails from '../helpers/filterTrails';
import { setMatches } from '../store/trails';
import TrailCard from './TrailCard';

export default function BottomSlider() {
  const [matches, setMatches] = useState(null);
  const dispatch = useDispatch();

  const trails = useSelector(state => state.city.trails);
  const filters = useSelector(state => state.filters);
  const lists = useSelector(state => state.lists);

  useEffect(() => {
    const matches = filterTrails(trails, filters, lists);
    console.log('matches in use effect', matches);
    setMatches(matches);
    // dispatch(setMatches(matches));
  }, [trails, filters, lists]);

  if (!trails || !filters || !lists) return null;

  if (!matches) return null;

  return (
    <BottomNavigation
      id='bottom-nav'
      className='bottom__nav'
      style={{
        width: '100%',
        height: 300,
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 10,
        zIndex: 1,
        overflowX: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      {matches.map(trail => (
        <TrailCard trail={trail} />
      ))}
    </BottomNavigation>
  );

  // return (
  //   <BottomNavigation
  //     id='bottom-nav'
  //     className='bottom__nav'
  //     style={{
  //       width: '100%',
  //       height: 300,
  //       backgroundColor: 'transparent',
  //       position: 'absolute',
  //       bottom: 10,
  //       zIndex: 1,
  //       overflowX: 'auto',
  //       display: 'flex',
  //       flexDirection: 'row',
  //       justifyContent: 'space-between',
  //     }}>
  //     {filterTrails(trails, filters, lists).map(trail => (
  //       <TrailCard trail={trail} />
  //     ))}
  //   </BottomNavigation>
  // );
}
