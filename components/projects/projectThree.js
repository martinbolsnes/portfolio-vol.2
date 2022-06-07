import styles from '../../styles/Home.module.css';
import H3 from '../headings/H3';
import CircleIcon from '../icons/CircleIcon';
import GithubIconTwo from '../icons/GithubIconTwo';
import VercelIcon from '../icons/vercelIcon';

export default function ProjectThree() {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectInfoContainer}>
        <div className={styles.projectImgThree}></div>
        <div className={styles.projectInfo}>
          <H3>Holidaze</H3>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <CircleIcon size={16} />
            <p>Hotel booking site with administration pages</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <CircleIcon size={16} />
            <p>NextJS - Tailwind - Starpi</p>
          </div>
        </div>
      </div>
      <div className={styles.projectIcons}>
        <a href='https://github.com/martinbolsnes/project-exam-2'>
          <GithubIconTwo />
        </a>
        <a href='https://project-exam-2-five.vercel.app/'>
          <VercelIcon />
        </a>
      </div>
    </div>
  );
}
