import Image from 'next/image';
import EmailIcon from './email';
import LinkedInIcon from './linkedin';
import styles from './style.module.css';

const TeamCard: React.FC = () => {
  const teamMembers = [
    {
      name: 'Ayush Shah',
      position: 'Hack President',
      email: 'ayush@acmucsd.org',
      linkedinLink: 'https://www.linkedin.com/in/ayush--shah/',
      imageUrl: '/assets/board/ayush.jpg',
    },
    {
      name: 'William Widjaja',
      position: 'Hack Technical Event Director',
      email: 'williamwidjaja@acmucsd.org',
      linkedinLink: 'https://www.linkedin.com/in/wwidjaja0',
      imageUrl: '/assets/board/widjaja.jpg',
    },
    {
      name: 'Andrew Rafal',
      position: 'Hack Technical Event Director',
      email: 'andrewrafal@acmucsd.org',
      linkedinLink: 'https://www.linkedin.com/in/andrew-rafal/',
      imageUrl: '/assets/board/andrew.jpg',
    },
    {
      name: 'Jennifer Ju',
      position: 'Hack Technical Event Director',
      email: 'jenniferju@acmucsd.org',
      linkedinLink: 'https://www.linkedin.com/in/jennifer-j-ju/',
      imageUrl: '/assets/board/jennifer.JPG',
    },
    {
      name: 'Maxime Vergnet',
      position: 'Hack Technical Event Director',
      email: 'maxime@acmucsd.org',
      linkedinLink: 'https://www.linkedin.com/in/maxime-vergnet-984273303/',
      imageUrl: '/assets/board/maxime.jpeg',
    },
    {
      name: 'Natalin Duangpanya',
      position: 'Hack Technical Event Director',
      email: 'natalin@acmucsd.org',
      linkedinLink: 'https://www.linkedin.com/in/ndpy/',
      imageUrl: '/assets/board/nat.png',
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
