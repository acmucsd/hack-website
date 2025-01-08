
// based on navbar from acmucsd.com
// https://github.com/acmucsd/main-website/blob/main/src/components/NavigationBar/index.tsx

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './style.module.css';
import Logo from '../../../public/Logo';

const navLinks = [
  { to: "", text: "About" },
  { to: "", text: "Events" },
  { to: "", text: "Meet the Team"},
  { to: "", text: "Hack School" }
]

const Navbar: React.FC = () => {
  const size: Size = useWindowSize();
  
  const [menuOpen, setMenuOpen] = useState(false);

  return (<div></div>);
};

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

export default Navbar;
