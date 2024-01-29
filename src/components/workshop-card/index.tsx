import React, { useState } from 'react';
import styles from './style.module.css';
import { EventObject } from '../../api/events_api';

const slides = '/assets/slides.png';
const github = '/assets/github.svg';
const youtube = '/assets/youtube.png';

const WorkshopCard: React.FC<{ workshops: EventObject[]; year: string }> = ({
  workshops,
  year,
}) => {
  const workshop_links = [
    // Hack School 2023
    {
      uuid: 'f24161df-4f55-4d20-b2b8-6277b679daaf',
      slides: 'https://acmurl.com/hackschool-1-slides',
      github: 'https://github.com/acmucsd/hackschool-fa23/tree/part1',
      recording: 'https://acmurl.com/hackschool-1-video',
    },
    {
      uuid: '7ba5e6ac-8f6b-4688-8809-ae0291694eb2',
      slides: 'https://acmurl.com/hackschool-2-slides',
      github: 'https://github.com/acmucsd/hackschool-fa23/tree/part2',
      recording: 'https://acmurl.com/hackschool-2-video',
    },
    {
      uuid: 'cb3d43f5-b881-4b6d-8861-ff35803dda41',
      slides: 'https://acmurl.com/hackschool-3-slides',
      github: 'https://github.com/acmucsd/hackschool-fa23/tree/part3',
      recording: 'https://acmurl.com/hackschool-3-video',
    },
    {
      uuid: '730c12e5-51ff-4086-9835-e31b5189b70d',
      slides: 'https://acmurl.com/hackschool-4-slides',
      github: 'https://github.com/acmucsd/hackschool-fa23/tree/part4',
      recording: 'https://acmurl.com/hackschool-4-video',
    },
    {
      uuid: '70a196ac-e046-4af0-947e-52940466df9c',
      slides: 'https://acmurl.com/hackschool-5-slides',
      github: 'https://github.com/acmucsd/hackschool-fa23/tree/part5',
      recording: 'https://acmurl.com/hackschool-5-video',
    },
    {
      uuid: '1b298664-ad76-4518-b216-4ebc22798f1c',
      slides: 'https://acmurl.com/hackschool-6-slides',
      github: 'https://github.com/acmucsd/hackschool-fa23/tree/part6',
      recording: 'https://acmurl.com/hackschool-6-video',
    },
    // Hack School 2022
    {
      uuid: '8b22ac73-0d91-46e6-94c7-5e48e1e20791',
      slides: 'https://acmurl.com/hackschool-0-slides',
      github: '',
      recording: '',
    },
    {
      uuid: 'a2f8c262-2f41-4337-837e-75f11f592d62',
      slides: 'https://acmurl.com/hackschool-1-slides',
      github: 'https://github.com/acmucsd/hackschool-fa22/tree/part1',
      recording: 'https://acmurl.com/hackschool-1-video',
    },
    {
      uuid: '38d87616-7a42-4dbc-8659-6cec805d0566',
      slides: 'https://acmurl.com/hackschool-2-slides',
      github: 'https://github.com/acmucsd/hackschool-fa22/tree/part2',
      recording: 'https://acmurl.com/hackschool-2-video',
    },
    {
      uuid: 'd399fbf2-3f56-4304-bd05-41c9360ccf6d',
      slides: 'https://acmurl.com/hackschool-3-slides',
      github: 'https://github.com/acmucsd/hackschool-fa22/tree/part3',
      recording: 'https://acmurl.com/hackschool-3-video',
    },
    {
      uuid: '36aec4e7-64f2-442d-86a1-e179f5fceec5',
      slides: 'https://acmurl.com/hackschool-4-slides',
      github: 'https://github.com/acmucsd/hackschool-fa22/tree/part4',
      recording: 'https://acmurl.com/hackschool-4-video',
    },
    {
      uuid: '57864d70-00ba-414b-b174-5292143fb364',
      slides: 'https://acmurl.com/hackschool-5-slides',
      github: 'https://github.com/acmucsd/hackschool-fa22/tree/part5',
      recording: 'https://acmurl.com/hackschool-5-video',
    },
    // Hack School 2021
    {
      uuid: '54d2485b-8761-40b5-ba88-a286e44a20c1',
      slides: 'https://acmurl.com/hackschool-fa21-1',
      github: 'https://acmurl.com/ws1-starter',
      recording: '',
    },
    {
      uuid: '082746cc-0df3-4f8d-9e8b-432fd9c8d068',
      slides: 'https://acmurl.com/hackschool-fa21-2',
      github: 'https://acmurl.com/ws2-starter',
      recording: '',
    },
    {
      uuid: '3f2e2f87-5ac8-4a2c-bdeb-dc38c43a3c52',
      slides:
        'https://docs.google.com/presentation/d/1KnvW7uHVTGBCs_716pzR6W_rVXZ69Qp5h1LbWmjkuGU/edit?usp=drive_link',
      github: '', // has wrong link in the slides
      recording: '',
    },
    // React workshop
    // {
    //   'uuid': 'dff34061-c021-4a5c-a747-9215f90759b2',
    //   'slides': '',
    //   'github': '',
    //   'recording': ''
    // },
    {
      uuid: 'a835d2f7-0034-4329-845b-5a7b22744e5d',
      slides: 'https://acmurl.com/hackschool-fa21-6',
      github: 'http://acmurl.com/beat-maker-starter',
      recording: '',
    },
    {
      uuid: 'bacbb02c-94f6-4b76-89a2-710a67ab4715',
      slides: 'http://acmurl.com/beat-maker-pt2',
      github: 'http://acmurl.com/beat-maker-starter',
      recording: '',
    },
    // Hack School 2020
    {
      uuid: 'e6461437-5343-41dc-9323-bd2e9e6f14e6',
      slides: 'https://acmurl.com/hackschool-fa20-1',
      github: 'https://github.com/acmucsd/hackschool-fa20/tree/part-1',
      recording: '',
    },
    {
      uuid: '4b86b4d3-ffba-4796-a274-abc8c1132ec2',
      slides: 'https://acmurl.com/hackschool-fa20-2',
      github: 'https://github.com/acmucsd/hackschool-fa20/tree/part-2',
      recording: '',
    },
    {
      uuid: '21af2472-6987-4b58-83ce-4fb8f31ba9ef',
      slides: 'https://acmurl.com/hackschool-fa20-3',
      github: 'https://github.com/acmucsd/hackschool-fa20/tree/part-3',
      recording: '',
    },
    {
      uuid: 'f2c4e286-0595-4504-a40b-e54e83910e33',
      slides: 'https://acmurl.com/hackschool-fa20-4',
      github: 'https://github.com/acmucsd/hackschool-fa20/tree/part-4',
      recording: '',
    },
    {
      uuid: 'dc713722-455d-4085-bc4d-0af51301e1f8',
      slides: 'https://acmurl.com/hackschool-fa20-5',
      github: 'https://github.com/acmucsd/hackschool-fa20/tree/part-5',
      recording: '',
    },
    {
      uuid: 'bf408f46-da0a-4c34-87c8-1b27575606d6',
      slides: 'https://acmurl.com/hackschool-fa20-6',
      github: 'https://github.com/acmucsd/hackschool-fa20/tree/part-6',
      recording: '',
    },
  ];

  const filteredEvents = workshops.filter(event => event.committee.includes('Hack'));

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
  };

  const allWorkshopData = workshops.reduce((acc, workshop) => {
    const workshopData = getWorkshopData(workshop, workshop_links);
    return acc.concat(workshopData);
  }, []);

  const filteredWorkshops = year
    ? allWorkshopData.filter(workshop => workshop.year === year)
    : allWorkshopData;

  const [showModal, setShowModal] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  const openModal = workshop => {
    setSelectedWorkshop(workshop);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedWorkshop(null);
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      {filteredWorkshops.map((workshopItem, index) => (
        <div key={index} className={styles.card} onClick={() => openModal(workshopItem)}>
          <div className={styles.card_header}>
            <h1 className={styles.card_title}>
              <b>Workshop: {workshopItem.title}</b>
            </h1>
          </div>
          <div className={styles.card_cover}>
            <img className={styles.card_image} src={workshopItem.cover} alt="Event cover" />
          </div>
          <div className={styles.icons}>
            {workshopItem.slides && (
              <a href={workshopItem.slides}>
                <img className={styles.link} src={slides} alt="Slides Logo" />
              </a>
            )}
            {workshopItem.github && (
              <div className={styles.github}>
                <a href={workshopItem.github}>
                  <img className={styles.link} src={github} alt="GitHub Logo" />
                </a>
              </div>
            )}
            {workshopItem.recording && (
              <a href={workshopItem.recording}>
                <img className={styles.link} src={youtube} alt="YouTube Logo" />
              </a>
            )}
          </div>
        </div>
      ))}

      {showModal && selectedWorkshop && (
        <div className={styles.modalOverlay} 
          onClick={closeModal}
          role="presentation">
          <div className={styles.modalContent} 
            onClick={e=>e.stopPropagation()}
            role="presentation">
            <div className={styles.card_cover}>
              <img className={styles.card_image} src={selectedWorkshop.cover} alt="Event cover" />
            </div>
            <div className={styles.card_info}>
              <h3>
                <b>Description: </b>
                {selectedWorkshop.description}
              </h3>
            </div>
            <div className={styles.icons}>
              {selectedWorkshop.slides && (
                <a href={selectedWorkshop.slides}>
                  <img className={styles.link} src={slides} alt="Slides Logo" />
                </a>
              )}
              {selectedWorkshop.github && (
                <div className={styles.github}>
                  <a href={selectedWorkshop.github}>
                    <img className={styles.link} src={github} alt="GitHub Logo" />
                  </a>
                </div>
              )}
              {selectedWorkshop.recording && (
                <a href={selectedWorkshop.recording}>
                  <img className={styles.link} src={youtube} alt="YouTube Logo" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkshopCard;
