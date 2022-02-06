import LinkedinIcon from '../icons/LinkedinIcon';
import InstagramIcon from '../icons/InstaIcon';
import TwitterIcon from '../icons/TwitterIcon';
import GithubIcon from '../icons/GithubIcon';
import styles from '../../styles/Home.module.css';

export default function SoMeContainer() {
  return (
    <div className={styles.some_container}>
      <GithubIcon
        size={54}
        strokeWidth={1}
        color='var(--color-tertiary)'
        href='https://github.com/martinbolsnes'
      />
      <LinkedinIcon size={54} strokeWidth={1} color='var(--color-tertiary)' />
      <TwitterIcon size={54} strokeWidth={1} color='var(--color-tertiary)' />
      <InstagramIcon size={54} strokeWidth={1} color='var(--color-tertiary)' />
    </div>
  );
}
