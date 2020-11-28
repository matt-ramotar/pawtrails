import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { sidebarWidth } from '../components/Sidebar';
import GoogleMapReact from 'google-map-react';
import { Box } from '@material-ui/core';

export function Marker({ lat, lng }) {
  return (
    <Box lat={lat} lng={lng}>
      <span style={{ fontSize: 60 }}>📍</span>
    </Box>
  );
}

export default function Explore() {
  const { lat, lng } = useSelector(state => state.map.center);

  const trails = useSelector(state => state.city.trails);

  const zoom = 14;

  const defaultOptions = {
    fullscreenControl: false,
  };

  return (
    <Box style={{ width: '100vw', height: '100vh', marginLeft: 0 }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyA4fFeyvSm7WKc6-V-HSWa1h_aNxu-Zico' }}
        center={{ lat: Number.parseFloat(lat), lng: Number.parseFloat(lng) }}
        zoom={zoom}
        defaultOptions={defaultOptions}>
        {trails ? trails.map(trail => <Marker lat={trail.lat} lng={trail.lng} text={trail.name} />) : null}
      </GoogleMapReact>
    </Box>
  );
}
