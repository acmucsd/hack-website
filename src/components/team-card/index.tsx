import React from 'react';
import styles from './style.module.css';

const TeamCard: React.FC = () => {
  const teamMembers = [
    {
      name: 'Nikhil Dange',
      position: 'Hack Technical Lead',
      email: 'nikhil@acmucsd.org',
      imageUrl: 'assets/nikhil2_pfp.JPG',
    },
    {
      name: 'Angela Hu',
      position: 'Hack Technical Event Directors',
      email: 'angelahu@acmucsd.org',
      imageUrl: 'assets/angela_pfp.PNG',
    },
    {
      name: 'Khushi Patel',
      position: 'Hack Technical Event Directors',
      email: 'khushi@acmucsd.org',
      imageUrl: 'assets/khushi_pfp.PNG',
    },
    {
      name: 'Charvi Shukla',
      position: 'Hack Technical Event Directors',
      email: 'charvi@acmucsd.org',
      imageUrl: 'assets/charvi_pfp.PNG',
    },
    {
      name: 'Alexis Vergnet',
      position: 'Hack Technical Event Directors',
      email: 'alexis@acmucsd.org',
      imageUrl: 'assets/alexis_pfp.PNG',
    },
  ];

  return (
    <div className={styles.team}>
      {teamMembers.map((member, index) => (
        <div key={member.name} className={styles.card}>
          <div className={styles.cardOutline}>
            <img src={member.imageUrl} alt={member.name} />
            <h4>{member.name}</h4>
            <p>{member.position}</p>
            <p>{member.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCard;
