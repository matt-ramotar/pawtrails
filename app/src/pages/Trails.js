import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, useParams } from 'react-router-dom';
import { getTrails } from '../store/trails';
import SearchCard from '../components/SearchCard';

export const CityTrailsPage = ({ getTrailsDispatcher, cityTrails }) => {
  const [trails, setTrails] = useState([]);

  const { city } = useParams();

  useEffect(() => {
    getTrailsDispatcher(city);
  }, []);

  const handleClick = e => {
    e.preventDefault();
    console.log(e.target.trail);
  };

  console.log('cityTrails', cityTrails);

  // function search(rows) {
  //   return rows.filter(row => {
  //     return row.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
  //   });
  // }

  if (!cityTrails) return null;

  return (
    <>
      <div>
        {cityTrails.map(trail => (
          <>
            <SearchCard trail={trail} city={city}></SearchCard>{' '}
          </>
        ))}
      </div>
    </>
  );
};

export default function CityTrailsContainer() {
  const dispatch = useDispatch();

  const getTrailsDispatcher = city => dispatch(getTrails(city));
  const cityTrails = useSelector(state => state.trails.matches);
  return <CityTrailsPage getTrailsDispatcher={getTrailsDispatcher} cityTrails={cityTrails} />;
}
