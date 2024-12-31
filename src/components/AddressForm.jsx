import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const AddressForm = ({ location, onSave }) => {
  const [form, setForm] = useState({
    title: "",
    houseNumber: "",
    area: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addressData = { ...form, location };
    await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/addresses`,
      addressData
    );
    onSave();
  };

  return (
    <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title (e.g., Home)"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        type="text"
        placeholder="House/Flat Number"
        value={form.houseNumber}
        onChange={(e) => setForm({ ...form, houseNumber: e.target.value })}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        type="text"
        placeholder="Area/Street"
        value={form.area}
        onChange={(e) => setForm({ ...form, area: e.target.value })}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <button
        type="submit"
        className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Save Address
      </button>
    </form>
  );
};

AddressForm.propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
};

export default AddressForm;
