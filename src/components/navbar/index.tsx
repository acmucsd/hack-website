'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import styles from './style.module.css';
import Logo from '../../../public/Logo';
import { useRouter, usePathname } from 'next/navigation';

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
  const pathname = usePathname();

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
  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      setIsMenuOpen(false);
      if (pathname === '/') {
        // Already on home, scroll smoothly
        const id = href.split('#')[1];
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
        window.history.pushState(null, '', href);
      } else {
        // Not on home, navigate to home with hash
        router.push(href);
      }
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
              {link.href.startsWith('/#') ? (
                <button
                  type="button"
                  className={styles.navButton}
                  onClick={e => handleNavClick(e, link.href)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleNavClick(e as any, link.href);
                    }
                  }}
                  tabIndex={0}
                  aria-label={link.name}
                  role="link"
                >
                  {link.name}
                </button>
              ) : (
                <Link href={link.href}>{link.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
