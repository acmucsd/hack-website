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
          <a href="mailto:hack@acmucsd.org" className={styles.link}>
            <FaEnvelope /> Email
          </a>
          <a href="https://acmurl.com/hack-disc" className={styles.link} target="_blank">
            <FaDiscord /> Discord
          </a>
          <a href="https://github.com/acmucsd" className={styles.link} target="_blank">
            <FaGithub /> Github
          </a>
          <a
            href="https://www.instagram.com/acm.ucsd/?hl=en"
            className={styles.link}
            target="_blank"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/acm-ucsd/"
            className={styles.link}
            target="_blank"
          >
            <FaLinkedinIn /> LinkedIn
          </a>
          <a href="https://www.facebook.com/acmucsd/" className={styles.link} target="_blank">
            <FaFacebookF /> Facebook
          </a>
        </div>
        <div className={styles.newsletter}>
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
