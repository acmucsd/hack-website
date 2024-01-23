import React, { useState, useEffect } from 'react';
import styles from './style.module.css';

const About: React.FC = () => {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [hackschoolImageIndex, setHackschoolImageIndex] = useState(0);
  const [projectImageIndex, setProjectImageIndex] = useState(0);

  const mainImages = ['assets/hackimage.JPG', 'assets/hackimage2.jpg'];

  const hackschoolImages = ['assets/hackschool.jpg', 'assets/hackschool2.png'];

  const projectImages = ['assets/projects.JPG', 'assets/projects2.jpg'];

  useEffect(() => {
    const mainInterval = setInterval(() => {
      setMainImageIndex(prevIndex => (prevIndex + 1) % mainImages.length);
    }, 5000);

    const hackschoolInterval = setInterval(() => {
      setHackschoolImageIndex(prevIndex => (prevIndex + 1) % hackschoolImages.length);
    }, 5000);

    const projectInterval = setInterval(() => {
      setProjectImageIndex(prevIndex => (prevIndex + 1) % projectImages.length);
    }, 5000);

    return () => {
      clearInterval(mainInterval);
      clearInterval(hackschoolInterval);
      clearInterval(projectInterval);
    };
  }, [mainImages.length, hackschoolImages.length, projectImages.length]);

  return (
    <div className={styles.about}>
      <h2 className={styles.title}>Welcome to ACM Hack!</h2>
      <br />
      <div className={styles.main}>
        <div className={styles.main_desc}>
          <div className={styles.main_header}>
            <h2>About Us</h2>
          </div>
          <p>
            ACM Hack is a community dedicated to industry-relevant software 
            engineering. Whether you&apos;re a seasoned developer or just 
            starting out, ACM Hack has a community for you! We host a number 
            of workshops throughout the year on software engineering tools and 
            technologies, which are open to all skill levels. You can check 
            out all of our upcoming workshops below!
          </p>
        </div>
        <img
          className={styles.mainImage}
          src={mainImages[mainImageIndex]}
          alt="Hack School Fall 2022"
        />
      </div>

      <div className={styles.hackschool}>
        <img
          className={styles.hackschoolImage}
          src={hackschoolImages[hackschoolImageIndex]}
          alt="A Hack School event"
        />
        <div className={styles.hackschool_desc}>
          <div className={styles.hackschool_header}>
            <h2>Hack School</h2>
          </div>
          <p>
            We&apos;re proud to host Hack School: a quarter-long bootcamp 
            teaching students the fundamentals of full-stack development and 
            software engineering. Hack School runs in-person every fall!
            All Hack School content is open source and hosted online under{' '}
            <a
              className={styles.link}
              href="https://hack.acmucsd.com/hack-school"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hack School
            </a>
            , so feel free to check it out and learn something new!
          </p>
        </div>
      </div>

      <div className={styles.projects}>
        <div className={styles.projects_desc}>
          <div className={styles.projects_header}>
            <h2>ACM Projects</h2>
          </div>
          <p>
            Interested in hands-on software engineering experience? ACM Hack 
            hosts project teams under ACM Projects! Projects are a great way 
            to gain relevant experience, learn new technologies, and work 
            with a team. We&apos;ll provide the mentorship and guidance, so 
            don&apos;t worry about having any prior experience. Learn more and 
            apply at{' '}
            <a
              className={styles.link}
              href="https://projects.acmucsd.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              projects.acmucsd.com
            </a>
            !
          </p>
        </div>
        <img
          className={styles.projectImage}
          src={projectImages[projectImageIndex]}
          alt="An ACM Hack Project Team"
        />
      </div>
    </div>
  );
};

export default About;
