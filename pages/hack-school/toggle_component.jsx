// to do: styling

import React, { useState } from 'react';

const ToggleCodeBlock = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button
        type="button"
        onClick={toggleVisibility}
        style={{
          backgroundColor: 'blue',
        }}
      >
        {isVisible ? 'Hide Code' : 'Show Code'}
      </button>
      {isVisible && <code>{children}</code>}
    </div>
  );
};

export default ToggleCodeBlock;
