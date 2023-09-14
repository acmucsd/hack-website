import styles from './style.module.css';
import EventsCard from '../../components/event-card';
import { EventsArray } from '../../api/events_api';

const Events: React.FC<{ events: EventsArray }> = ({ events }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Past Events</h1>
      <div className={styles.events}>
        {events && events.map(event => <EventsCard key={event.uuid} event={event} />)}
      </div>
    </div>
  );
};

export default Events;
