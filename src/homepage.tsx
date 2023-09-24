import type { NextPage } from 'next';

import Hero from './sections/Hero';
import About from './sections/About';
import Events from './sections/Events';
import Team from './sections/Team';

const HomePage: NextPage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Events />
      <Team />
    </main>
  );
};

export default HomePage;
