import { useState } from 'react';
import styles from './style.module.css';
import WorkshopCards from '../../components/workshop-card';
import { EventObject, getAllHackEvents } from '../../api/events_api';

const EventsHub: React.FC<{ latest_events: EventObject[] }> = () => {
  const [selectedYear, setSelectedYear] = useState<string | null>('2023');
  const [hackEvents, setHackEvents] = useState<EventObject[] | undefined>(undefined);

  const handleYearChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);

    try {
      const events = await getAllHackEvents('');
      setHackEvents(events);
    } catch (error) {
      // console.log('Error fetching hack events:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Events Hub</h1>
        <div className={styles.event_type}>
          <select
            className={styles.event_select}
            id="year"
            onChange={handleYearChange}
            value={selectedYear || '2023'}
          >
            <option value="2023">Hack School 2023</option>
            <option value="2022">Hack School 2022</option>
            <option value="2021">Hack School 2021</option>
            <option value="2020">Hack School 2020</option>
          </select>
        </div>
      </div>
      <div>
        <WorkshopCards year={selectedYear} workshops={hackEvents || []} />
      </div>
    </div>
  );
};

export default EventsHub;
