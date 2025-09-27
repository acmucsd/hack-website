'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from './style.module.css';
import Logo from '../../../public/Logo';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Events', href: '/#events' },
  { name: 'Team', href: '/#team' },
  { name: 'Contact', href: '/#contact' },
  { name: 'Hack School', href: '/hack-school' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // Inject smooth scroll CSS once
  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = 'html { scroll-behavior: smooth; }';
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Custom click handler for hash links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.split('#')[1];
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      // Optionally close menu on mobile
      setIsMenuOpen(false);
      // Update URL hash without page reload
      window.history.pushState(null, '', href);
    }
  };

  return (
  <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <Logo />
        <button
          type="button"
          className={`${styles.menuToggle} ${isMenuOpen ? styles.menuToggleOpen : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
          {NAV_LINKS.map(link => (
            <li key={link.name}>
              <Link href={link.href} legacyBehavior>
                <a onClick={e => handleNavClick(e, link.href)}>{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
