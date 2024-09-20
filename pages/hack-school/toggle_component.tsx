import { useState, FC, ReactNode } from 'react';

const ToggleCodeBlock: FC<{ children: ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsVisible(!isVisible)}
        style={{
          backgroundColor: '#494D5F',
          borderRadius: '4px',
          padding: '0.5rem',
          margin: '0.5rem',
        }}
      >
        {isVisible ? 'Hide Code' : 'Show Code'}
      </button>
      {isVisible && <code>{children}</code>}
    </div>
  );
};

export default ToggleCodeBlock;
