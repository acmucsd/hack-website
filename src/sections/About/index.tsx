import styles from './style.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <h2 className={styles.title}>Welcome to ACM Hack!</h2>
      <br />
      <div className={styles.main}>
        <div className={styles.main_desc}>
          <p>
            ACM Hack is a community dedicated to software engineering and exploring what&apos;s
            possible through code. Our name comes from hackathons&mdash;events where the power of
            coding results in cool pieces of technology. Whether you&apos;re a seasoned developer or
            just starting out, ACM Hack has a community of like-minded software engineers and events
            for you! We host a number of workshops throughout the year on industry-relevant tools
            and technologies, all of which are open to all skill levels and don&apos;t have
            prerequisites. You can check out all of our upcoming workshops below!
          </p>
        </div>
        <img className={styles.mainImage} src="assets/hackimage.JPG" alt="Hack School Fall 2022" />
      </div>

      <div className={styles.hackschool}>
        <img
          className={styles.hackschoolImage}
          src="assets/hackschool.jpg"
          alt="A Hack School event"
        />
        <div className={styles.hackschool_desc}>
          <p>
            We&apos;re proud to host Hack School: a series of 6 workshops designed to teach students
            the fundamentals of full-stack development and software engineering. We host Hack School
            in-person every fall, and the Fall 2023 application is live at{' '}
            <a
              className={styles.link}
              href="https://acmurl.com/apply-hackschool"
              target="_blank"
              rel="noopener noreferrer"
            >
              acmurl.com/apply-hackschool
            </a>
            ! All Hack School content is open source and hosted on this website under{' '}
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
          <p>
            Interested in hands-on software engineering experience? ACM Hack hosts project teams
            under ACM Projects! Our project teams are a great way to gain relevant experience for
            your resume, learn new technologies, and work with a team. We&apos;ll provide the
            mentorship and guidance, so don&apos;t worry about having any prior experience. Learn
            more and apply at{' '}
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
          src="assets/projects.JPG"
          alt="An ACM Hack Project Team"
        />
      </div>
    </div>
  );
};

export default About;
