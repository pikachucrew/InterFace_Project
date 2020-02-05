import LiveFeed from './Charts/LiveFeed';
import LineChart from './Charts/LineChart';
import React from 'react';

const DataVisualisation = ({ user }) => {
  return (
    <div>
      <LineChart username={user} />
      <LiveFeed username={user} />
    </div>
  );
};

export default DataVisualisation;
