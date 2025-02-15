import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 4.043903985288466,// Latitude of the location you want to center the map on
  lng:  9.742421500179299, // Longitude of the location
};

const GoogleMapComponent: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDUI0eyTdkUJKl_MTpwG4C9JgjqwQV8lMc', // Replace with your API key
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={12} // Adjust the zoom level as needed
      center={center}
    >
      <Marker position={center} /> {/* Marker at the center location */}
    </GoogleMap>
  );
};

export default GoogleMapComponent;