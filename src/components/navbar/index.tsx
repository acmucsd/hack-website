import Link from 'next/link';
import styles from './style.module.css';
import Logo from '../../../public/Logo';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
  { name: 'Hack School', href: '/hack-school' },
];

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <Logo />
        <ul className={styles.navLinks}>
          {NAV_LINKS.map(link => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
