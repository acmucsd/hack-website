import {
  FaEnvelope,
  FaDiscord,
  FaMediumM,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';
import styles from './style.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.title}>Connect With Us!</h2>
      <div className={styles.content}>
        <div className={styles.socialLinks}>
          <a href="#email" className={styles.link}>
            <FaEnvelope /> Email
          </a>
          <a href="#discord" className={styles.link}>
            <FaDiscord /> Discord
          </a>
          <a href="#medium" className={styles.link}>
            <FaMediumM /> Medium
          </a>
          <a href="#facebook" className={styles.link}>
            <FaFacebookF /> Facebook
          </a>
          <a href="#github" className={styles.link}>
            <FaGithub /> Github
          </a>
          <a href="#instagram" className={styles.link}>
            <FaInstagram /> Instagram
          </a>
          <a href="#linkedin" className={styles.link}>
            <FaLinkedinIn /> LinkedIn
          </a>
          <a href="#youtube" className={styles.link}>
            <FaYoutube /> YouTube
          </a>
        </div>
        <div className={styles.newsletter}>
          <h3>Newsletter</h3>
          <p>Receive weekly events and news!</p>
          <button type="button" className={styles.subscribeButton}>
            Subscribe!
          </button>
          <a
            href="https://vercel.com?utm_source=your-team&utm_campaign=oss"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.vercelBadge}
          >
            <SiVercel /> Powered by Vercel
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
