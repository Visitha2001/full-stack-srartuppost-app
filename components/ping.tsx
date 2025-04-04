// Ping.js
import React from 'react';

const Ping = () => {
    return (
      <div className="relative inline-flex">
        <span className="flex size-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-red-600"></span>
        </span>
      </div>
    );
};

export default Ping;