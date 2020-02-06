import LiveFeed from './Charts/LiveFeed';
import LineChart from './Charts/LineChart';
import React from 'react';

const DataVisualisation = ({ user, startTime, streaming, alertOn, alertOff }) => {
  return (
    <div>
      <LiveFeed
        username={user}
        startTime={startTime}
        streaming={streaming}
        alertOn={alertOn}
        alertOff={alertOff}
      />
      <LineChart username={user} />
    </div>
  );
};

export default DataVisualisation;
