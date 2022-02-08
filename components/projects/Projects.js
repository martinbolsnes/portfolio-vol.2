import ProjectsSection from './ProjectsSection';
import ProjectsWrapper from './ProjectsWrapper';
import ProjectOne from './ProjectOne';
import ProjectTwo from './ProjectTwo';
import styles from '../../styles/Home.module.css';
import H2 from '../headings/H2';
import Fade from 'react-reveal/Fade';

export default function Projects() {
  return (
    <>
      <ProjectsSection>
        <ProjectsWrapper>
          <Fade bottom>
            <H2>Recent Projects</H2>
            <span className={styles.orangeLine}></span>
          </Fade>
          <Fade bottom>
            <ProjectOne />
          </Fade>
          <Fade bottom>
            <span
              className={styles.orangeLine}
              style={{ width: '100%' }}
            ></span>
          </Fade>
          <Fade bottom>
            <ProjectTwo />
          </Fade>
        </ProjectsWrapper>
      </ProjectsSection>
    </>
  );
}
