
// modified from navbar from acmucsd.com
// https://github.com/acmucsd/main-website/blob/main/src/components/NavigationBar/index.tsx

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './style.module.css';
import Logo from '../../../public/Logo';

const navLinks = [
  { to: "/about", text: "About" },
  { to: "/events", text: "Events" },
  { to: "/team", text: "Meet the Team"},
  { to: "/hack-school", text: "Hack School" }
]



interface Size {
  width: number | undefined;
  height: number | undefined;
}

function useWindowSize(): Size {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize; 
}

const Navbar: React.FC = () => {
  const size: Size = useWindowSize();
  
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);



  return (
  <div className={styles.navbarWrapper}>
      <div className={styles.navBar}>
        <div className={styles.navbarLogo}></div>
          <Link legacyBehavior href="/">
            <a className={styles.navbarLogoA}>
              <Logo />
              <p className={styles.navbarLogoP}></p>
            </a>
          </Link>
      </div>

      <div className={styles.navLinks}>
        {navLinks.map((link, key) => {
          return <Link legacyBehavior key={key} href={link.to}>
            <a className={styles.navItem}>{link.text}</a>
          </Link>
        })}
        {/*member login
        <Link href={"https://members.acmucsd.com/login"}>
          <a className={s.loginButton}>Member Login</a>
        </Link>
        */}
      </div>
      {/* Bottom Rainbow */}
      <div className={styles.rainbow} />
  </div>
)};

export default Navbar;
