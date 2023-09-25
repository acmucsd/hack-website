import React from 'react';
import styles from './style.module.css';

import EmailIcon from './email';
import LinkedInIcon from './linkedin';

const TeamCard: React.FC = () => {
  const teamMembers = [
    {
      name: 'Nikhil Dange',
      position: 'Hack Technical Lead',
      email: 'nikhil@acmucsd.org',
      linkedinLink: 'https://www.linkedin.com/in/nsdange/',
      imageUrl: 'assets/nikhil.JPG',
    },
    {
      name: 'Angela Hu',
      position: 'Hack Technical Event Director',
      email: 'angelahu@acmucsd.org',
      linkedinLink: 'https://www.linkedin.com/in/angelahu925/',
      imageUrl: 'assets/angela.jpeg',
    },
    {
      name: 'Khushi Patel',
      position: 'Hack Technical Event Director',
      email: 'khushi@acmucsd.org',
      linkedinLink: 'http://www.linkedin.com/in/pateljkhushi',
      imageUrl: 'assets/khushi.jpeg',
    },
    {
      name: 'Charvi Shukla',
      position: 'Hack Technical Event Director',
      email: 'charvi@acmucsd.org',
      linkedinLink: 'https://www.linkedin.com/in/charvi-shukla-439b681b2/',
      imageUrl: 'assets/charvi.jpeg',
    },
    {
      name: 'Alexis Vergnet',
      position: 'Hack Technical Event Director',
      email: 'alexis@acmucsd.org',
      linkedinLink: 'https://www.linkedin.com/in/avergnet/',
      imageUrl: 'assets/alexis.jpeg',
    },
  ];

  return (
    <div className={styles.team}>
      {teamMembers.map((member, index) => (
        <div key={member.name} className={styles.card}>
          <div className={styles.cardOutline}>
            <img src={member.imageUrl} alt={member.name} />
            <h4>{member.name}</h4>
            <h5>{member.position}</h5>
            <div className={styles.icons}>
              {(
                <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer">
                  <EmailIcon/>
                </a>
              )}
              {(
                <a href={member.linkedinLink} target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon/>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TeamCard;
