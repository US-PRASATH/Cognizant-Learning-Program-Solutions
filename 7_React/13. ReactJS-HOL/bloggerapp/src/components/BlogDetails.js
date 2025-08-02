import React, { useState } from "react";

export default function BlogDetails() {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div>
      {/* <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Blog' : 'Show Blog'}
      </button> */}
      
      {showDetails && (
        <div>
          <b style={{ fontSize: '1.5em' }}>React Learning</b>
          <div>
            <b>Stephen Biz</b>
            <div>Welcome to learning React!</div>
          </div>
          <h2>Installation</h2>
          <p>
            <b>Schwezdenier</b>
            <div>You can install React from npm.</div>
          </p>
        </div>
      )}
    </div>
  );
}