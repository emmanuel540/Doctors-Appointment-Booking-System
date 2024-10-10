import React, { useEffect, useState } from 'react';
import BookingService from '../../api/BookingService';

const ViewSlots = () => {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    const fetchSlots = async () => {
      const response = await BookingService.getAvailableSlots();
      setSlots(response.data);
    };

    fetchSlots();
  }, []);

  return (
    <div>
      <h2>Available Slots</h2>
      <ul>
        {slots.map((slot) => (
          <li key={slot.id}>
            {slot.date} - {slot.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewSlots;
