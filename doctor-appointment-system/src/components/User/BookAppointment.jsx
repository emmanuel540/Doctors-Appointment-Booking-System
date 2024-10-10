import React, { useState } from 'react';
import BookingService from '../../api/BookingService';

const BookAppointment = () => {
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState('');

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      await BookingService.bookAppointment({ date, slot });
      alert("Appointment booked successfully!");
    } catch (error) {
      console.error("Booking failed:", error);
    }
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      <form onSubmit={handleBooking}>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input type="time" value={slot} onChange={(e) => setSlot(e.target.value)} />
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default BookAppointment;
