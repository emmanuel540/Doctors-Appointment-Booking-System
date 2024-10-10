import React, { useState } from 'react';
import BookingService from '../../api/BookingService';

const CancelReschedule = () => {
  const [appointmentId, setAppointmentId] = useState('');

  const handleCancel = async () => {
    try {
      await BookingService.cancelAppointment(appointmentId);
      alert("Appointment canceled!");
    } catch (error) {
      console.error("Cancelation failed:", error);
    }
  };

  return (
    <div>
      <h2>Cancel/Reschedule Appointment</h2>
      <input
        type="text"
        placeholder="Appointment ID"
        value={appointmentId}
        onChange={(e) => setAppointmentId(e.target.value)}
      />
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default CancelReschedule;
