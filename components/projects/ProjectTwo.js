import styles from '../../styles/Home.module.css';
import H3 from '../headings/H3';
import CircleIcon from '../icons/CircleIcon';
import GithubIconTwo from '../icons/GithubIconTwo';
import VercelIcon from '../icons/vercelIcon';

export default function ProjectTwo() {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectInfoContainer}>
        <div className={styles.projectImgTwo}></div>
        <div className={styles.projectInfo}>
          <H3>Weather App</H3>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <CircleIcon size={16} />
            <p>Current weather with Openweathermap API</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <CircleIcon size={16} />
            <p>NextJS - Tailwind</p>
          </div>
        </div>
      </div>
      <div className={styles.projectIcons}>
        <a href='https://github.com/martinbolsnes/weather-app'>
          <GithubIconTwo />
        </a>
        <a href='https://weather-app-smoky-omega.vercel.app/'>
          <VercelIcon />
        </a>
      </div>
    </div>
  );
}
