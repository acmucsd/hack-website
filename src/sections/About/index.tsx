import styles from './style.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <h2 className={styles.title}>Welcome to ACM Hack!</h2>
      <br />
      <div className={styles.main}>
        <div className={styles.main_desc}>
          <p>
            ACM Hack is a community dedicated to software engineering and
            exploring what’s possible through code. Our name comes from hackathons–events where the power of coding
            results in cool pieces of technology. Whether you’re a seasoned
            developer or just starting out, ACM Hack has a community of
            like-minded software engineers and events for you! We host a number
            of workshops throughout the year on industry-relevant tools and
            technologies, all of which are open to all skill levels and don’t
            have prerequisites. You can check out all of our upcoming workshops
            below!
          </p>
        </div>
        <div className={styles.mainImage}>
          <img src="assets/hackimage.JPG" alt="hi"></img>
        </div>
      </div>
      <br />
      <div className={styles.hackschool}>
        <div className={styles.hackschoolImage}>
          <img src="assets/sample.jpg" alt="hi"></img>
        </div>
        <div className={styles.hackschool_desc}>
          <p>
            We’re proud to host Hack School: a series of 6 workshops designed to
            teach students the fundamentals of full-stack development and
            software engineering. We host Hack School in-person every fall, so
            keep an eye out for upcoming application information during Week 0.
            All Hack School content is open source and hosted on this website,
            so feel free to check it out and learn something new!
          </p>
        </div>
      </div>
      <br />
      <div className={styles.projects}>
        <div className={styles.projects_desc}>
          <p>
            Interested in hands-on software engineering experience? ACM Hack
            also hosts project teams under ACM Projects! Our project teams are a
            great way to get relevant experience for your resume and to learn
            new technologies. We’ll provide the mentorship and guidance, so don't worry about having prior experience! Learn
            more at ACM Projects (link to projects somehow).
          </p>
        </div>
        <div className={styles.projectImage}>
          <img src="assets/projects.JPG" alt="hi" className={styles.projectImage}></img>
        </div>
      </div>
    </div>
  );
};


export default About;
