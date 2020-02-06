import LiveFeed from './Charts/LiveFeed';
import LineChart from './Charts/LineChart';
import React from 'react';

const DataVisualisation = ({ user, startTime, streaming, alertOn, alertOff }) => {
  return (
    <div>
      <LineChart username={user} />
      <div>
        <LiveFeed
          username={user}
          startTime={startTime}
          streaming={streaming}
          alertOn={alertOn}
          alertOff={alertOff}
        />
      </div>
    </div>
  );
};

export default DataVisualisation;
