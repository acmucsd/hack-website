import type { NextPage } from 'next';

import Hero from './sections/Hero';
import About from './sections/About';
import Events from './sections/Events';
import Team from './sections/Team';

import { EventsArray } from './api/events_api';

const HomePage: NextPage<{ past_events: EventsArray; future_events: EventsArray }> = ({
  past_events,
  future_events,
}) => {
  return (
    <main>
      <Hero />
      <About />
      <Events past_events={past_events} future_events={future_events} />
      <Team />
    </main>
  );
};

export default HomePage;
