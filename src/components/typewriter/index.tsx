import { motion } from 'framer-motion';
import styles from './style.module.css';

interface TypewriterProps {
  text: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text }) => {
  const chars = text.split('');

  return (
    <div className={styles.landing_title}>
      {chars.map((letter, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeIn',
            duration: 0.5,
            delay: i / 10,
          }}
          // eslint-disable-next-line react/no-array-index-key
          key={i}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default Typewriter;
