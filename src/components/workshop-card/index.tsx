import styles from './style.module.css';
import { EventObject } from '../../api/events_api';

const slides = "/assets/slides.png";
const github = "/assets/github.png";
const youtube = "/assets/youtube.png";


const WorkshopCard: React.FC<{ workshops: EventObject[], year: string }> =({workshops, year}) => {

    const workshop_links = [
        {"uuid": "f24161df-4f55-4d20-b2b8-6277b679daaf",
          "slides": "https://acmurl.com/hackschool-1-slides",
          "github": "https://github.com/acmucsd/hackschool-fa23/tree/part1",
          "recording": "https://acmurl.com/hackschool-1-video"
        },
        {"uuid": "f24161df-4f55-4d20-b2b8-6277b679daaf",
          "slides": "https://acmurl.com/hackschool-2-slides",
          "github": "https://github.com/acmucsd/hackschool-fa23/tree/part2",
          "recording": "https://acmurl.com/hackschool-2-video"
        },
        {"uuid": "f24161df-4f55-4d20-b2b8-6277b679daaf",
          "slides": "https://acmurl.com/hackschool-3-slides",
          "github": "https://github.com/acmucsd/hackschool-fa23/tree/part3",
          "recording": "https://acmurl.com/hackschool-3-video"
        },
        {"uuid": "f24161df-4f55-4d20-b2b8-6277b679daaf",
        "slides": "https://acmurl.com/hackschool-4-slides",
        "github": "https://github.com/acmucsd/hackschool-fa23/tree/part4",
        "recording": "https://acmurl.com/hackschool-4-video"
        },
        {"uuid": "f24161df-4f55-4d20-b2b8-6277b679daaf",
          "slides": "https://acmurl.com/hackschool-5-slides",
          "github": "https://github.com/acmucsd/hackschool-fa23/tree/part5",
          "recording": "https://acmurl.com/hackschool-5-video"
        },
    ];
    
    const getWorkshopData = (workshop: EventObject, workshopLinks: Array<any>) => {
        const workshopUuid = workshop.uuid;
        const matchingLinks = workshopLinks.filter(link => link.uuid === workshopUuid);
    
        const workshopData = matchingLinks.map(link => ({
          title: workshop.title,
          cover: workshop.cover,
          description: workshop.description,
          year: new Date(workshop.start).getFullYear().toString(),
          slides: link.slides,
          github: link.github,
          recording: link.recording,
        }));
        return workshopData;
      }

      const allWorkshopData = workshops.reduce((acc, workshop) => {
        const workshopData = getWorkshopData(workshop, workshop_links);
        return acc.concat(workshopData);
      }, []);
    
      const filteredWorkshops = year
        ? allWorkshopData.filter((workshop) => workshop.year === year)
        : allWorkshopData;

    console.log(filteredWorkshops);
    
  return (
    <div className={styles.container}>
      {filteredWorkshops.map((workshopItem, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.card_header}>
            <h1 className={styles.card_title}>
              <b>Workshop: {workshopItem.title}</b>
            </h1>
          </div>
          <div className={styles.card_cover}>
            <img className={styles.card_image} src={workshopItem.cover} alt="Event cover" />
          </div>
          <div className={styles.card_info}>
            <h3>
              <b>Description: </b>
              {workshopItem.description}
            </h3>
            <div className={styles.icons}>
              <a href={workshopItem.slides}>
                <img className={styles.link} src={slides} alt="Slides Logo" />
              </a>
              <a href={workshopItem.github}>
                <img className={styles.link} src={github} alt="GitHub Logo" />
              </a>
              <a href={workshopItem.recording}>
                <img className={styles.link} src={youtube} alt="YouTube Logo" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
    
    export default WorkshopCard;