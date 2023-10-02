import styles from './style.module.css';
import TeamCard from '../../components/team-card/index';

const Team: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Meet the Team!</h1>
      <TeamCard />
    </div>
  );
};

export default Team;
