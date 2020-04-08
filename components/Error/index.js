import React from 'react';

const Error = (error) => (
  <pre>
    <p>
      Error:
      <span>{JSON.stringify(error, null, 2)}</span>
    </p>
  </pre>
);

export default Error;
