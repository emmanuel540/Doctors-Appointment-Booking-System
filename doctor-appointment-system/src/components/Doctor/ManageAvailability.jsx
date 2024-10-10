import React, { useState } from 'react';
import BookingService from '../../api/BookingService';

const ManageAvailability = () => {
  const [availability, setAvailability] = useState([]);

  const handleAvailability = async () => {
    try {
      await BookingService.setAvailability(availability);
      alert("Availability updated!");
    } catch (error) {
      console.error("Failed to update availability:", error);
    }
  };

  return (
    <div>
      <h2>Manage Availability</h2>
      <form onSubmit={handleAvailability}>
        <input
          type="text"
          placeholder="Enter your availability"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
        />
        <button type="submit">Update Availability</button>
      </form>
    </div>
  );
};

export default ManageAvailability;
