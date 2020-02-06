import LiveFeed from './Charts/LiveFeed';
import LineChart from './Charts/LineChart';
import React from 'react';

const DataVisualisation = ({ user, checkAlert }) => {
  return (
    <div>
      <LiveFeed username={user} checkAlert={checkAlert}/>
      <LineChart username={user} />
    </div>
  );
};

export default DataVisualisation;
