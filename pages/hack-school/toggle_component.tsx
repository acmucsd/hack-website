// to do: styling

import { useState, ReactNode, FC } from 'react';

interface ToggleCodeBlockProps {
  children: ReactNode;
}

const ToggleCodeBlock: FC<ToggleCodeBlockProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(isVisible => !isVisible);
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
