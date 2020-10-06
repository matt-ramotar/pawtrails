import React from 'react';

import SearchCard from '../components/SearchCard';

export default function CityTrails({ trails }) {
  if (!trails) return null;
  return (
    <div>
      {trails.map(trail => (
        <>
          <SearchCard trail={trail}></SearchCard>{' '}
        </>
      ))}
    </div>
  );
}
