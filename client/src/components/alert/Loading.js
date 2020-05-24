import React from 'react';

const Loading = () => {
  return (
    <div className="progress md-progress">
      <div
        className="progress-bar bg-info"
        role="progressbar"
        style={{ width: '100%' }}
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
};

export default Loading;
