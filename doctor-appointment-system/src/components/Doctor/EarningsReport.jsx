import React, { useEffect, useState } from 'react';
import BookingService from '../../api/BookingService';

const EarningsReport = () => {
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    const fetchEarnings = async () => {
      const response = await BookingService.getEarnings();
      setEarnings(response.data.total);
    };

    fetchEarnings();
  }, []);

  return (
    <div>
      <h2>Monthly Earnings Report</h2>
      <p>Your total earnings this month: ${earnings}</p>
    </div>
  );
};

export default EarningsReport;
