'use client';

import { useState, useEffect } from 'react';
import Typewriter from '../typewriter';
import styles from './style.module.css';

const TypeAnimation: React.FC = () => {
  const words = ['build', 'break', 'innovate'];
  const [index, setIndex] = useState(0);

  const currentWord = words[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % words.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.word_container}>
      {currentWord === 'build' && <Typewriter text={currentWord} />}
      {currentWord === 'break' && <span className={styles.break}>{currentWord}</span>}
      {currentWord === 'innovate' && <span className={styles.innovate}>{currentWord}</span>}
    </div>
  );
};

export default TypeAnimation;
