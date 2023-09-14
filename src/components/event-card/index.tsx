import styles from './style.module.css';
import { EventObject } from '../../api/events_api';

const EventsCard: React.FC<{ event: EventObject }> = ({ event }) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
  const date = new Date(event.start).getDate();
  const month = months[new Date(event.start).getMonth()];
  const day = days[new Date(event.start).getDay()];
  const year = new Date(event.start).getFullYear();
  const { uuid, title, location } = event;
  const formatTitle = (title: string): string => {
    return encodeURIComponent(title.toLowerCase().trim().replace(/ /g, '-'));
  };
  return (
    <div className={styles.container}>
      <a href={`https://acmucsd.com/events/${formatTitle(title)}-${uuid}`} target="_blank">
        <div className={styles.card} key={uuid}>
          <div className={styles.card_header}>
            <h1 className={styles.card_date}>
              <b>{month} </b>
              {date} {year}
            </h1>
            <h2 className={styles.card_day}>{day}</h2>
          </div>
          <div className={styles.card_info}>
            <h3 className={styles.card_title}>{title}</h3>
            <h3 className={styles.card_location}>{location}</h3>
          </div>
        </div>
      </a>
    </div>
  );
};

export default EventsCard;
