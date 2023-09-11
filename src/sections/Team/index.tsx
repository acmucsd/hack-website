import styles from './style.module.css';
import TeamCard from '../../components/team-card/index';

const Team: React.FC = () => {
  return (
    <div>
      <h3 className={styles.team}>Team Section</h3>
      <TeamCard />
    </div>
  )
};

export default Team;