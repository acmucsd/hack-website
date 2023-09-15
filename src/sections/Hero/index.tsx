import { FaChevronDown } from 'react-icons/fa6';
import Image from 'next/image';
import Typewriter from '../../components/typewriter';
import leftside from '../../../public/assets/left_diamonds.svg';
import rightside from '../../../public/assets/right_diamonds.svg';
import styles from './style.module.css';
import aboutStyles from '../About/style.module.css';

const Hero: React.FC = () => {
  const scrollToInfo: () => void = () => {
    const navbarHeight = 115;
    const element = document.getElementsByClassName(aboutStyles.about)[0];
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementTop - navbarHeight,
      behavior: 'smooth',
    });
  };
  return (
    <div className={styles.hero}>
      <div className={styles.backdrop}>
        <Image src={leftside} className={styles.backdrop_left} alt="backdrop" />
        <div className={styles.landing_text}>
          <h1 className={styles.landing_title}>ACM Hack</h1>
          <Typewriter
            text="Empowering our community of software engineers. Building cool things with code. Yes, we
            like to code."
            delay={60}
          />
        </div>
        <Image src={rightside} className={styles.backdrop_right} alt="backdrop" />
      </div>
      <div className={styles.arrow} role="presentation" onClick={scrollToInfo}>
        <h6>Learn More</h6>
        <FaChevronDown className={styles.scroll} />
      </div>
    </div>
  );
};

export default Hero;
