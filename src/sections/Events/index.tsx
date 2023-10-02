import { useState } from 'react';
import styles from './style.module.css';
import EventsCard from '../../components/event-card';
import { EventsArray } from '../../api/events_api';

const Events: React.FC<{ past_events: EventsArray; future_events: EventsArray }> = ({
  past_events,
  future_events,
}) => {
  const [selectedOption, setSelectedOption] = useState('Upcoming'); // State to store the selected option
  const [filteredEvents, setFilteredEvents] = useState(future_events);

  // Function to handle option change
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value;
    setSelectedOption(selected);

    // Set filtered events based on the selected option
    if (selected === 'Upcoming') {
      setFilteredEvents(future_events);
    } else if (selected === 'Past') {
      setFilteredEvents(past_events);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Events</h1>
        <div className={styles.event_type}>
          <select
            className={styles.event_select}
            onChange={handleOptionChange}
            value={selectedOption}
          >
            <option value="Upcoming">Upcoming</option>
            <option value="Past">Past</option>
          </select>
        </div>
      </div>
      <div className={styles.events}>
        {!filteredEvents ? (
          <h3>No upcoming events. Check again later!</h3>
        ) : (
          filteredEvents.map(event => <EventsCard key={event.uuid} event={event} />)
        )}
      </div>
    </div>
  );
};

export default Events;
