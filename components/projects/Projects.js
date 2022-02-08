import ProjectsSection from './ProjectsSection';
import ProjectsWrapper from './ProjectsWrapper';
import ProjectOne from './ProjectOne';
import ProjectTwo from './ProjectTwo';
import styles from '../../styles/Home.module.css';
import H2 from '../headings/H2';

export default function Projects() {
  return (
    <>
      <ProjectsSection>
        <ProjectsWrapper>
          <H2>Recent Projects</H2>
          <span className={styles.orangeLine}></span>
          <ProjectOne />
          <span className={styles.orangeLine} style={{ width: '100%' }}></span>
          <ProjectTwo />
        </ProjectsWrapper>
      </ProjectsSection>
    </>
  );
}
