import { useState, useEffect } from 'react';
import styles from './style.module.css';

interface TypewriterProps {
  text: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 180);

      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [currentIndex, text]);

  return <h6 className={styles.landing_caption}>{currentText}</h6>;
};

export default Typewriter;
