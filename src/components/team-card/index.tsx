import Image from 'next/image';
import EmailIcon from './email';
import LinkedInIcon from './linkedin';
import styles from './style.module.css';

const TeamCard: React.FC = () => {
  const teamMembers = [
    {
      name: 'Angela Hu',
      position: 'Hack President',
      email: 'angelahu@acmucsd.org',
      linkedinLink: 'https://www.linkedin.com/in/angelahu925/',
      imageUrl: '/assets/board/angela.jpeg',
    },
    {
      name: 'Kevin Lu',
      position: 'Hack Technical Event Director',
      email: 'kevinlu@acmucsd.org',
      linkedinLink: 'https://www.linkedin.com/in/kevin-lu-92b026245/',
      imageUrl: '/assets/board/kevin.png',
    },
    {
      name: 'Nathan Wang',
      position: 'Hack Technical Event Director',
      email: 'nathan@acmucsd.org',
      linkedinLink: 'https://www.linkedin.com/in/nathan-wang-100b1a212/',
      imageUrl: '/assets/board/nathan.png',
    },
    {
      name: 'Pansy Kuang',
      position: 'Hack Technical Event Director',
      email: 'pansy@acmucsd.org',
      linkedinLink: 'http://www.linkedin.com/in/pansykuang',
      imageUrl: '/assets/board/pansy.jpeg',
    },
    {
      name: 'Shreya Nagunuri',
      position: 'Hack Technical Event Director',
      email: 'shreya@acmucsd.org',
      linkedinLink: 'https://www.linkedin.com/in/shreya-nagunuri/',
      imageUrl: '/assets/board/shreya.png',
    },
    {
      name: 'Uliyaah Dionisio',
      position: 'Hack Technical Event Director',
      email: 'uliyaah@acmucsd.org',
      linkedinLink: 'https://www.linkedin.com/in/uliyaah-dionisio-246695233/',
      imageUrl: '/assets/board/uliyaah.png',
    },
    {
      name: 'Sarah Li',
      position: 'Diamond Staff',
      email: 'sarah@acmucsd.org',
      linkedinLink: 'https://www.linkedin.com/in/sarah-li-448b90218/',
      imageUrl: '/assets/board/sarah.png',
    },
    {
      name: 'Prerana Gowda',
      position: 'Diamond Staff',
      email: 'prerana@acmucsd.org',
      linkedinLink: 'https://www.linkedin.com/in/prerana-gowda/',
      imageUrl: '/assets/board/prerana.png',
    },
    {
      name: 'Tyler Hoang',
      position: 'Diamond Staff',
      email: 'tylerhoang@acmucsd.org',
      linkedinLink: 'https://www.linkedin.com/in/tyler-hoang-8079ab246/',
      imageUrl: '/assets/board/tyler.jpeg',
    },
  ];

  return (
    <div className={styles.team}>
      {teamMembers.map(member => (
        <div key={member.name} className={styles.card}>
          <div className={styles.imageCropper}>
            <Image
              className={styles.cardImage}
              src={member.imageUrl}
              alt={member.name}
              width={100}
              height={100}
            />
          </div>
          <h4>{member.name}</h4>
          <h5>{member.position}</h5>
          <div className={styles.icons}>
            <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer">
              <EmailIcon />
            </a>
            <a href={member.linkedinLink} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TeamCard;
