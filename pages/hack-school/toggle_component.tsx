import { useState, FC, ReactNode } from 'react';

const ToggleCodeBlock: FC<{ children: ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsVisible((isVisible) => !isVisible)}
        style={{
          backgroundColor: 'hsl(var(--nextra-primary-hue) 100% 70% / var(--tw-bg-opacity))',
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
