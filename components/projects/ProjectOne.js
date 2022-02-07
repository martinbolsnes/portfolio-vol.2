import styles from '../../styles/Home.module.css';
import H3 from '../headings/H3';
import CircleIcon from '../icons/CircleIcon';
import GithubIconTwo from '../icons/GithubIconTwo';
import NetlifyIcon from '../icons/NetlifyIcon';

export default function ProjectOne() {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectInfoContainer}>
        <div className={styles.projectImgOne}></div>
        <div className={styles.projectInfo}>
          <H3>amenity.</H3>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <CircleIcon size={16} />
            <p>Ecoomerce website with administration pages</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <CircleIcon size={16} />
            <p>Javascript - Bootstrap - Strapi</p>
          </div>
        </div>
      </div>
      <div className={styles.projectIcons}>
        <GithubIconTwo />
        <NetlifyIcon />
      </div>
    </div>
  );
}
