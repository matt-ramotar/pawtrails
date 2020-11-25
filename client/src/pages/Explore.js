import React, { useEffect, useState } from 'react';
import { sidebarWidth } from '../components/Sidebar';
import GoogleMapReact from 'google-map-react';

export default function Explore() {
  const zoom = 14;
  const center = { lat: 45.765, lng: -123.9777161 };
  const defaultOptions = {
    fullscreenControl: false,
  };

  return (
    <div style={{ width: `calc(100% - ${sidebarWidth}px)`, height: '100vh', marginLeft: sidebarWidth }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyA4fFeyvSm7WKc6-V-HSWa1h_aNxu-Zico' }}
        defaultCenter={center}
        defaultZoom={zoom}
        defaultOptions={defaultOptions}></GoogleMapReact>
    </div>
  );
}
