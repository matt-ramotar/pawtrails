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
  const [center, setCenter] = useState({ lat: 45.765, lng: -123.9777161 });
  const coords = useSelector(state => state.city.coords);
  const trails = useSelector(state => state.city.trails);

  useEffect(() => {
    if (coords) setCenter({ lat: Number.parseFloat(coords.lat), lng: Number.parseFloat(coords.lng) });
  }, [coords]);

  const zoom = 14;

  const defaultOptions = {
    fullscreenControl: false,
  };

  return (
    <Box style={{ width: '100vw', height: '100vh', marginLeft: 0 }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyA4fFeyvSm7WKc6-V-HSWa1h_aNxu-Zico' }}
        center={center}
        zoom={zoom}
        defaultOptions={defaultOptions}>
        {trails ? trails.map(trail => <Marker lat={trail.lat} lng={trail.lng} text={trail.name} />) : null}
      </GoogleMapReact>
    </Box>
  );
}
