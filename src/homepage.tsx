import type { NextPage } from 'next';

import Hero from './sections/Hero';
import About from './sections/About';
import Events from './sections/Events';
import Team from './sections/Team';

import { EventsArray } from './api/events_api';

const HomePage: NextPage<{ events: EventsArray }> = ({ events }) => {
  return (
    <main>
      <Hero />
      <About />
      <Events events={events} />
      <Team />
    </main>
  );
};

export default HomePage;
