import PropTypes from "prop-types";

const LocationModal = ({ onEnableLocation, onSearchManually }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-lg font-semibold mb-4">
          Location Permission Required
        </h3>
        <p className="mb-6">Please enable location or search manually.</p>
        <div className="space-x-4">
          <button
            onClick={onEnableLocation}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Enable Location
          </button>
          <button
            onClick={onSearchManually}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Search Manually
          </button>
        </div>
      </div>
    </div>
  );
};

LocationModal.propTypes = {
  onEnableLocation: PropTypes.func.isRequired,
  onSearchManually: PropTypes.func.isRequired,
};

export default LocationModal;
