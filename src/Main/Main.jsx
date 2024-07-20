import React, { useState } from 'react';

const Main = () => {
  const [fontSize, setFontSize] = useState(10);
  return (
    <div>
      <input
        type='range'
        min='16'
        max='100'
        onChange={(e) => {
          setFontSize(e.target.value);
        }}
      />
      <h1 style={{ fontSize: `${fontSize}px` }}>adjust my size</h1>
    </div>
  );
};

export default Main;
