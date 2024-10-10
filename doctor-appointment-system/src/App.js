import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import PatientDashboard from './components/User/PatientDashboard';
import BookAppointment from './components/User/BookAppointment';
import ViewSlots from './components/User/ViewSlots';
import CancelReschedule from './components/User/CancelReschedule';
import DoctorDashboard from './components/Doctor/DoctorDashboard';
import AdminDashboard from './components/Admin/AdminDashboard';
import './styles/GlobalStyles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<PatientDashboard />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/view-slots" element={<ViewSlots />} />
        <Route path="/cancel-reschedule" element={<CancelReschedule />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
