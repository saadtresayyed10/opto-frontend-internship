import { useState } from "react";
import LocationModal from "./components/LocationModal";
import Map from "./components/Map";
import AddressForm from "./components/AddressForm";
import AddressList from "./components/AddressList";

const App = () => {
  const [showModal, setShowModal] = useState(true);
  const [location, setLocation] = useState(null);

  const handleEnableLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setShowModal(false);
      },
      () => alert("Location permission denied")
    );
  };

  return (
    <div className="p-6">
      {showModal && <LocationModal onEnableLocation={handleEnableLocation} />}
      {location && <Map center={location} onLocationSelect={setLocation} />}
      {location && (
        <AddressForm
          location={location}
          onSave={() => window.location.reload()}
        />
      )}
      <AddressList />
    </div>
  );
};

export default App;
