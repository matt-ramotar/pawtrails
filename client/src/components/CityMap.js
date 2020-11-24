import React from 'react';
import { useGoogleMaps } from 'react-hook-google-maps';

export default function CityMap({ lat, lng }) {
  const googleAPIKey = process.env.REACT_APP_GOOGLE_API_KEY;

  const { ref } = useGoogleMaps(googleAPIKey, {
    center: { lat: Number(lat), lng: Number(lng) },
    zoom: 10,
  });

  return (
    <div>
      <div ref={ref} style={{ width: '100%', height: 300 }} />;<h1>Map</h1>
    </div>
  );
}
