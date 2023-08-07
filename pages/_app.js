import { DM_Sans } from 'next/font/google';
import '../styles.css';

// If loading a variable font, you don't need to specify the font weight
const font = DM_Sans({ subsets: ['latin'], weight: '400' });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
}
