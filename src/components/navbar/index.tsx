import Link from 'next/link'; // Assuming Next.js for routing
import styles from './style.module.css';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
  { name: 'Hack School', href: '/hack-school' }, // Added Hack School
];

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <div className={styles.logoContainer}>
          {/* TODO: Replace with actual ACM logo */}
          <div className={styles.logoPlaceholder}>acm</div>
          <span className={styles.logoText}>at UC San Diego</span>
        </div>
        <ul className={styles.navLinks}>
          {NAV_LINKS.map(link => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <button type="button" className={styles.loginButton}>
          Member Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
