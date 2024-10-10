import React, { useState, useEffect } from 'react';
import AnalyticsService from '../../api/AnalyticsService';

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState({});

  useEffect(() => {
    const fetchAnalytics = async () => {
      const response = await AnalyticsService.getAnalytics();
      setAnalyticsData(response.data);
    };

    fetchAnalytics();
  }, []);

  return (
    <div>
      <h2>Analytics</h2>
      <pre>{JSON.stringify(analyticsData, null, 2)}</pre>
    </div>
  );
};

export default Analytics;
