import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { sidebarWidth } from '../components/Sidebar';
import GoogleMapReact from 'google-map-react';

export default function Explore() {
  const [center, setCenter] = useState({ lat: 45.765, lng: -123.9777161 });
  const coords = useSelector(state => state.city.coords);

  useEffect(() => {
    if (coords) setCenter({ lat: Number.parseFloat(coords.lat), lng: Number.parseFloat(coords.lng) });
  }, [coords]);

  const zoom = 14;

  const defaultOptions = {
    fullscreenControl: false,
  };

  return (
    <div style={{ width: `calc(100% - ${sidebarWidth}px)`, height: '100vh', marginLeft: sidebarWidth }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyA4fFeyvSm7WKc6-V-HSWa1h_aNxu-Zico' }}
        center={center}
        zoom={zoom}
        defaultOptions={defaultOptions}></GoogleMapReact>
    </div>
  );
}
