const BookingService = {
    bookAppointment: async (appointmentDetails) => {
      // Simulate API call
      return appointmentDetails;
    },
    getAvailableSlots: async () => {
      // Simulate API call
      return { data: [{ id: 1, date: '2024-10-10', time: '10:00' }] };
    },
    cancelAppointment: async (appointmentId) => {
      // Simulate API call
      return appointmentId;
    },
    getEarnings: async () => {
      // Simulate API call
      return { data: { total: 5000 } };
    },
    setAvailability: async (availability) => {
      // Simulate API call
      return availability;
    },
  };
  
  export default BookingService;
  