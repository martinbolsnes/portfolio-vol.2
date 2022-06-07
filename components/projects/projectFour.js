import styles from '../../styles/Home.module.css';
import H3 from '../headings/H3';
import CircleIcon from '../icons/CircleIcon';
import GithubIconTwo from '../icons/GithubIconTwo';

export default function ProjectFour() {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectInfoContainer}>
        <div className={styles.projectImgFour}></div>
        <div className={styles.projectInfo}>
          <H3>JavaScript Frameworks CA</H3>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <CircleIcon size={16} />
            <p>Course Assigment 2022</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <CircleIcon size={16} />
            <p>NextJS</p>
          </div>
        </div>
      </div>
      <div className={styles.projectIcons}>
        <a href='https://github.com/martinbolsnes/js-frameworks-ca-martinbolsnes'>
          <GithubIconTwo />
        </a>
      </div>
    </div>
  );
}
