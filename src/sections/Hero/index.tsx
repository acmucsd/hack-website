import { FaChevronDown } from 'react-icons/fa6';
import Image from 'next/image';
import TypeAnimation from '../../components/type-animation';
import leftside from '../../../public/assets/left_diamonds.svg';
import styles from './style.module.css';
import aboutStyles from '../About/style.module.css';

const Hero: React.FC = () => {
  const scrollToInfo: () => void = () => {
    const navbarHeight = 80;
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
        <Image src={leftside} className={styles.backdrop_left} alt="backdrop" priority />
        <div className={styles.landing_text}>
          <div className={styles.landing_message}>
            <h1 className={styles.landing_title}>ACM Hack</h1>
            <h4 className={styles.landing_caption}>
              Empowering our community of software engineers. <br /> Developing cool things with
              code.
            </h4>
          </div>
          <TypeAnimation />
        </div>
      </div>
      <div className={styles.arrow} role="presentation" onClick={scrollToInfo}>
        <h6>Learn More</h6>
        <FaChevronDown className={styles.scroll} />
      </div>
    </div>
  );
};

export default Hero;
