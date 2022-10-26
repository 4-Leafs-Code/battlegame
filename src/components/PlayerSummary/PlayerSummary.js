import { Bar} from '../Bar/Bar';
import styles from './styles.module.css';

const red = '#821200';
const blue = '#1953cb';

export const PlayerSummary = ({ main = false, name, level, health, maxHealth,  }) => {
  return (
    <div
      style={{ backgroundColor: main ? red : blue }}
      className={styles.main}
    >
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.level}>LVL: {level}</div>
      </div>

      <div className={styles.health}>
        <Bar label="HP" value={health} maxValue={maxHealth} />
      </div>
    </div>
  );
};
