import Image from 'next/image';
import EmailIcon from './email';
import LinkedInIcon from './linkedin';
import styles from './style.module.css';

const TeamCard: React.FC = () => {
  const teamMembers = [
    {
      name: 'Nathan Wang',
      position: 'Hack President',
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
      name: 'Sarah Li',
      position: 'Hack Technical Event Director',
      email: 'sarah@acmucsd.org',
      linkedinLink: 'https://www.linkedin.com/in/sarah-li-448b90218/',
      imageUrl: '/assets/board/sarah.png',
    },
    {
      name: 'Tyler Hoang',
      position: 'Hack Technical Event Director',
      email: 'tylerhoang@acmucsd.org',
      linkedinLink: 'https://www.linkedin.com/in/tyler-hoang-8079ab246/',
      imageUrl: '/assets/board/tyler.jpeg',
    },
    {
      name: 'Maxime Vergnet',
      position: 'Hack Technical Event Director',
      email: 'maxime@acmucsd.org',
      linkedinLink: 'https://www.linkedin.com/in/maxime-vergnet-984273303/',
      imageUrl: '/assets/board/maxime.jpeg',
    },
    {
      name: 'Ayush Shah',
      position: 'Hack Technical Wiki Director',
      email: 'ayush@acmucsd.org',
      linkedinLink: 'https://www.linkedin.com/in/ayush--shah/',
      imageUrl: '/assets/board/ayush.jpeg',
    }
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
