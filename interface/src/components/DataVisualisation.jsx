import LiveFeed from './Charts/LiveFeed';
import LineChart from './Charts/LineChart';
import React from 'react';

const DataVisualisation = ({ user }) => {
  return (
    <div>
      <LineChart username={user} />
      <div className="flex flex-column justify-center align-center daddyDiv">
       <LiveFeed username={user}/>
      </div>
    </div>
  );
};

export default DataVisualisation;
