import styles from '../../styles/Home.module.css';
import H3 from '../headings/H3';
import CircleIcon from '../icons/CircleIcon';
import GithubIconTwo from '../icons/GithubIconTwo';
import VercelIcon from '../icons/vercelIcon';

export default function ProjectTwo() {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectInfoContainer}>
        <div className={styles.projectImgFive}></div>
        <div className={styles.projectInfo}>
          <H3>Wünderground</H3>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <CircleIcon size={16} />
            <p>Blog</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <CircleIcon size={16} />
            <p>NextJS - Tailwind - Sanity</p>
          </div>
        </div>
      </div>
      <div className={styles.projectIcons}>
        <a href='https://github.com/martinbolsnes/wunderground-blog'>
          <GithubIconTwo />
        </a>
        <a href='https://wunderground-blog.vercel.app/'>
          <VercelIcon />
        </a>
      </div>
    </div>
  );
}
