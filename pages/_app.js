import { DM_Sans } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = DM_Sans({ subsets: ['latin'],
weight: '400'})
 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}