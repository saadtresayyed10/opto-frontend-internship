import { useEffect, useState } from "react";
import axios from "axios";

const AddressList = () => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const fetchAddresses = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/addresses`
      );
      setAddresses(response.data.data);
    };
    fetchAddresses();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/addresses/${id}`);
    setAddresses((prev) => prev.filter((addr) => addr._id !== id));
  };

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Saved Addresses</h3>
      <ul className="space-y-4">
        {addresses.map((address) => (
          <li key={address._id} className="p-4 border rounded-lg">
            <p className="font-bold">{address.title}</p>
            <p className="text-gray-700">
              {address.houseNumber}, {address.area}
            </p>
            <button
              onClick={() => handleDelete(address._id)}
              className="mt-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddressList;
