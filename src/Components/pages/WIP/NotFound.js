import React from 'react';

const NotFound = props => {
  return (
    <div
      style={{
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <h1>Page is still under construction</h1>
        <p>Please give some time</p>
      </div>
    </div>
  );
};

export default NotFound;
