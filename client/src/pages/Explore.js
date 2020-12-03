import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCenter } from '../store/map';
import { sidebarWidth } from '../components/Sidebar';
import GoogleMapReact from 'google-map-react';
import { Box } from '@material-ui/core';
import filterTrails from '../helpers/filterTrails';

export function Marker({ lat, lng }) {
  return (
    <Box lat={lat} lng={lng}>
      <span style={{ fontSize: 60 }}>📍</span>
    </Box>
  );
}

export default function Explore() {
  const dispatch = useDispatch();
  const cityCoords = useSelector(state => state.city.coords);
  const cityLat = cityCoords.lat;
  const cityLng = cityCoords.lng;

  const { lat, lng } = useSelector(state => state.map.center);

  useEffect(() => {
    dispatch(setCenter({ lat: cityLat, lng: cityLng }));
  }, [cityLat, cityLng]);
  const filters = useSelector(state => state.filters);
  const trails = useSelector(state => state.city.trails);

  const zoom = 14;

  const createMapOptions = maps => ({
    fullscreenControl: false,
    panControl: false,
  });

  return (
    <Box style={{ width: '100vw', height: '100vh', marginLeft: 0 }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyA4fFeyvSm7WKc6-V-HSWa1h_aNxu-Zico' }}
        center={{ lat: Number.parseFloat(lat), lng: Number.parseFloat(lng) }}
        zoom={zoom}
        options={createMapOptions}>
        {trails
          ? filterTrails(trails, filters).map(trail => <Marker lat={trail.lat} lng={trail.lng} text={trail.name} />)
          : null}
      </GoogleMapReact>
    </Box>
  );
}
