import { useState } from "react";
import PropTypes from "prop-types";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const Map = ({ center, onLocationSelect }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [marker, setMarker] = useState(center);

  if (!isLoaded) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="mt-4">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onClick={(e) => {
          const newMarker = { lat: e.latLng.lat(), lng: e.latLng.lng() };
          setMarker(newMarker);
          onLocationSelect(newMarker);
        }}
      >
        <Marker position={marker} draggable={true} />
      </GoogleMap>
    </div>
  );
};

Map.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  onLocationSelect: PropTypes.func.isRequired,
};

export default Map;
